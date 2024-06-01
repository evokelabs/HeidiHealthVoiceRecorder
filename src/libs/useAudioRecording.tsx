import { useState, useEffect } from 'react'

const useAudioRecording = (isPaused: boolean, setIsPaused: (value: boolean) => void) => {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
  const [audioChunks, setAudioChunks] = useState<Blob[]>([])

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const recorder = new MediaRecorder(stream)

    recorder.addEventListener('dataavailable', (event: BlobEvent) => {
      setAudioChunks((prev) => [...prev, event.data])
    })

    recorder.start()
    setMediaRecorder(recorder)
  }

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.addEventListener('dataavailable', (event: BlobEvent) => {
        setAudioChunks((prev) => [...prev, event.data])

        const audioBlob = new Blob(audioChunks)
        const audioUrl = URL.createObjectURL(audioBlob)
        const audio = new Audio(audioUrl)
        audio.play()
      })

      mediaRecorder.stop()
    }
  }

  // Pause or resume the recording when isPaused changes
  useEffect(() => {
    const handlePause = () => {
      console.log(mediaRecorder?.state) // 'paused'
    }

    const handleResume = () => {
      console.log(mediaRecorder?.state) // 'recording'
    }

    if (mediaRecorder) {
      if (isPaused) {
        mediaRecorder.addEventListener('pause', handlePause)
        mediaRecorder.pause()
      } else {
        mediaRecorder.addEventListener('resume', handleResume)
        mediaRecorder.resume()
      }
    }

    // Clean up: remove event listeners
    return () => {
      if (mediaRecorder) {
        mediaRecorder.removeEventListener('pause', handlePause)
        mediaRecorder.removeEventListener('resume', handleResume)
      }
    }
  }, [isPaused, mediaRecorder]) // Only re-run the effect if isPaused or mediaRecorder changes

  // Clean up the mediaRecorder and audioChunks when the component unmounts
  useEffect(() => {
    return () => {
      if (mediaRecorder) {
        mediaRecorder.stream.getTracks().forEach((track) => track.stop())
      }
      setAudioChunks([])
    }
  }, [mediaRecorder])

  return { startRecording, stopRecording }
}

export default useAudioRecording
