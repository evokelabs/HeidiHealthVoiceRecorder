import '@babel/polyfill'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const useSpeechToText = () => {
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition()

  const start = () => {
    SpeechRecognition.startListening({ continuous: true })
  }

  const stop = () => {
    SpeechRecognition.stopListening()
  }

  const reset = () => {
    resetTranscript()
  }

  return { transcript, start, stop, reset, browserSupportsSpeechRecognition }
}

export default useSpeechToText
