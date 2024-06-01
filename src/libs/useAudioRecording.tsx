import { useState, useEffect, useRef, useCallback, Dispatch, SetStateAction } from 'react'

const useAudioRecording = ({ isPaused, setIsPaused }: { isPaused: boolean; setIsPaused: Dispatch<SetStateAction<boolean>> }) => {
  const [recordedUrl, setRecordedUrl] = useState('')
  const [levels, setLevels] = useState<number[]>([]) // Change level to levels
  const mediaStream = useRef<MediaStream | null>(null)
  const mediaRecorder = useRef<MediaRecorder | null>(null)
  const chunks = useRef<Blob[]>([])
  const audioContext = useRef<null | AudioContext>(null)
  const analyser = useRef<null | AnalyserNode>(null)
  const dataArray = useRef<null | Uint8Array>(null)

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
        if (analyser.current && dataArray.current) {
          analyser.current.getByteFrequencyData(dataArray.current)
          const dataCopy = Array.from(dataArray.current) // Create a copy of dataArray.current

          // Find the maximum value in dataArray.current
          const maxVal = Math.max(...dataCopy)

          // Reduce the 1024 values to 12 by averaging every group of values
          const groupSize = Math.floor(dataCopy.length / 16)
          const reducedData = Array.from({ length: 12 }, (_, i) => {
            const group = dataCopy.slice(i * groupSize, (i + 1) * groupSize)
            let average = Math.round(group.reduce((a, b) => a + b, 0) / group.length) // Round the average to the nearest whole number

            // If average is NaN, convert it to 0
            if (isNaN(average)) {
              average = 0
            }

            // Normalize the average to a range of 0 to 100
            let normalizedAverage = 0
            if (maxVal !== 0) {
              normalizedAverage = Math.round((average / maxVal) * 100)
            }

            return normalizedAverage
          })

          setLevels(reducedData) // Use the reduced data to update levels
        }
        requestAnimationFrame(updateAudioLevels)
      }
      setTimeout(updateAudioLevels, 1000)

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
    } catch (error) {
      console.error('Error accessing microphone:', error)
    }
  }, [])

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

  useEffect(() => {
    if (isPaused) {
      pauseRecording()
    } else {
      resumeRecording()
    }
  }, [isPaused, pauseRecording, resumeRecording])

  return { startRecording, stopRecording, pauseRecording, resumeRecording, recordedUrl, isPaused, setIsPaused, levels }
}

export default useAudioRecording
