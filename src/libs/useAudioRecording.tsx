import { useState, useEffect, useRef, useCallback, Dispatch, SetStateAction } from 'react'

const useAudioRecording = ({ isPaused, setIsPaused }: { isPaused: boolean; setIsPaused: Dispatch<SetStateAction<boolean>> }) => {
  const [recordedUrl, setRecordedUrl] = useState('')
  const mediaStream = useRef<MediaStream | null>(null)
  const mediaRecorder = useRef<MediaRecorder | null>(null)
  const chunks = useRef<Blob[]>([])

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaStream.current = stream
      mediaRecorder.current = new MediaRecorder(stream)

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
        console.log('Recording stopped, blob URL created:', url)
      }

      mediaRecorder.current.start()
      console.log('Recording started successfully')
    } catch (error) {
      console.error('Error accessing microphone:', error)
    }
  }, [])

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
      mediaRecorder.current.stop()
      console.log('Recording stopped')
    }

    if (mediaStream.current) {
      mediaStream.current.getTracks().forEach((track) => {
        track.stop()
      })
      mediaStream.current = null
    }
  }

  const pauseRecording = () => {
    console.log('recording resumed')
    if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
      mediaRecorder.current.pause()
      setIsPaused(true)
      console.log('Recording paused')
    }
  }

  const resumeRecording = () => {
    console.log('recording resumed')
    if (mediaRecorder.current && mediaRecorder.current.state === 'paused') {
      mediaRecorder.current.resume()
      setIsPaused(false)
      console.log('Recording resumed')
    }
  }

  useEffect(() => {
    if (isPaused) {
      pauseRecording()
    } else {
      resumeRecording()
    }
  }, [isPaused])

  // Clean up the mediaRecorder and audioChunks when the component unmounts
  useEffect(() => {
    return () => {
      stopRecording()
    }
  }, [])

  return { startRecording, stopRecording, pauseRecording, resumeRecording, recordedUrl, isPaused, setIsPaused }
}

export default useAudioRecording
