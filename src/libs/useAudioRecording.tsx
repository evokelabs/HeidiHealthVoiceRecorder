import { useState, useRef, useCallback, Dispatch, SetStateAction } from 'react'

const useAudioRecording = ({ isPaused, setIsPaused }: { isPaused: boolean; setIsPaused: Dispatch<SetStateAction<boolean>> }) => {
  const [recordedUrl, setRecordedUrl] = useState('')
  const [levels, setLevels] = useState<number[]>([])
  const mediaStream = useRef<MediaStream | null>(null)
  const mediaRecorder = useRef<MediaRecorder | null>(null)
  const [microphoneError, setMicrophoneError] = useState<string | null>(null)
  const chunks = useRef<Blob[]>([])
  const audioContext = useRef<null | AudioContext>(null)
  const analyser = useRef<null | AnalyserNode>(null)
  const dataArray = useRef<null | Uint8Array>(null)

  const isPausedRef = useRef(isPaused)
  isPausedRef.current = isPaused

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaStream.current = stream
      mediaRecorder.current = new MediaRecorder(stream)

      audioContext.current = new AudioContext()
      analyser.current = audioContext.current.createAnalyser()
      dataArray.current = new Uint8Array(analyser.current.frequencyBinCount)

      const source = audioContext.current.createMediaStreamSource(stream)
      source.connect(analyser.current)

      const updateAudioLevels = () => {
        if (isPausedRef.current) return
        if (analyser.current && dataArray.current) {
          analyser.current.getByteFrequencyData(dataArray.current)
          const dataCopy = Array.from(dataArray.current)
          const logDataCopy = dataCopy.map(
            (value, index, array) => array[Math.round(Math.log10(index + 1) * (array.length / Math.log10(array.length)))]
          )
          const maxVal = 20
          const groupSize = Math.floor(logDataCopy.length / 240)
          const reducedData = Array.from({ length: 12 }, (_, i) => {
            let average = Math.round(logDataCopy.slice(i * groupSize, (i + 1) * groupSize).reduce((a, b) => a + b, 0) / groupSize)
            average = isNaN(average) ? 0 : average
            return 10 + Math.round((average / maxVal) * 15)
          })
          setLevels(reducedData)
        }

        if (!isPaused) {
          setTimeout(() => requestAnimationFrame(updateAudioLevels), 50)
        }
      }
      updateAudioLevels()

      mediaRecorder.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.current.push(e.data)
        }
      }

      mediaRecorder.current.onstop = () => {
        const recordedBlob = new Blob(chunks.current, { type: 'audio/webm' })
        const url = URL.createObjectURL(recordedBlob)
        setRecordedUrl(url)
        chunks.current = []
      }

      mediaRecorder.current.start()
    } catch (err) {
      setMicrophoneError((err as Error).message)
    }
  }, [isPaused])

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
      mediaRecorder.current.stop()
    }

    if (mediaStream.current) {
      mediaStream.current.getTracks().forEach((track) => {
        track.stop()
      })
      mediaStream.current = null
    }
  }

  const pauseRecording = useCallback(() => {
    if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
      mediaRecorder.current.pause()
      setIsPaused(true)
    }
  }, [setIsPaused])

  const resumeRecording = useCallback(() => {
    if (mediaRecorder.current && mediaRecorder.current.state === 'paused') {
      mediaRecorder.current.resume()
      setIsPaused(false)
    }
  }, [setIsPaused])

  return { startRecording, stopRecording, pauseRecording, resumeRecording, recordedUrl, levels, microphoneError }
}

export default useAudioRecording
