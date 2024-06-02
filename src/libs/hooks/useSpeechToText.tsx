import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const useSpeechToText = () => {
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition()

  const startSpeechRecognition = () => {
    SpeechRecognition.startListening({ continuous: true })
  }

  const stopSpeechRecognition = () => {
    SpeechRecognition.stopListening()
  }

  const resetSpeechRecognition = () => {
    resetTranscript()
  }

  return { transcript, startSpeechRecognition, stopSpeechRecognition, resetSpeechRecognition, browserSupportsSpeechRecognition }
}

export default useSpeechToText
