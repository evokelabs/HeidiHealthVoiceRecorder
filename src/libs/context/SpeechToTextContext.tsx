import { createContext } from 'react'

export interface SpeechToTextContextType {
  transcript: string
  startSpeechRecognition: () => void
  stopSpeechRecognition: () => void
  resetSpeechRecognition: () => void
  browserSupportsSpeechRecognition: boolean
}

export const SpeechToTextContext = createContext<SpeechToTextContextType>({
  transcript: '',
  startSpeechRecognition: () => {},
  stopSpeechRecognition: () => {},
  resetSpeechRecognition: () => {},
  browserSupportsSpeechRecognition: false,
})
