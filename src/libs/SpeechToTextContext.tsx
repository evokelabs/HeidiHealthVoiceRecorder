import { createContext } from 'react'

// Define the context type
export interface SpeechToTextContextType {
  transcript: string
  start: () => void
  stop: () => void
  reset: () => void
  browserSupportsSpeechRecognition: boolean
}

// Create the context with a default value
export const SpeechToTextContext = createContext<SpeechToTextContextType>({
  transcript: '',
  start: () => {},
  stop: () => {},
  reset: () => {},
  browserSupportsSpeechRecognition: false,
})
