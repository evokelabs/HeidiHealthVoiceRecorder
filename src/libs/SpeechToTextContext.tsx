import { createContext } from 'react'

// Define the context type
export interface SpeechToTextContextType {
  transcript: string
  startSpeechRecognition: () => void
  stopSpeechRecognition: () => void
  resetSpeechRecognition: () => void
  browserSupportsSpeechRecognition: boolean
}

// Create the context with a default value
export const SpeechToTextContext = createContext<SpeechToTextContextType>({
  transcript: '',
  startSpeechRecognition: () => {},
  stopSpeechRecognition: () => {},
  resetSpeechRecognition: () => {},
  browserSupportsSpeechRecognition: false,
})
