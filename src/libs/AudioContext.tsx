import { createContext } from 'react'

export interface AudioContextType {
  seconds: number
  setSeconds: (value: number | ((prevSeconds: number) => number)) => void
  isPaused: boolean
  setIsPaused: (value: boolean) => void
  startRecording: () => void
  stopRecording: () => void
}
export const AudioContext = createContext<AudioContextType>({
  seconds: 0,
  setSeconds: () => {},
  isPaused: false,
  setIsPaused: () => {},
  startRecording: () => {},
  stopRecording: () => {},
})
