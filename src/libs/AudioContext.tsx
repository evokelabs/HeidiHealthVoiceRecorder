import { Dispatch, SetStateAction, createContext } from 'react'

export interface AudioContextType {
  seconds: number
  setSeconds: (value: number | ((prevSeconds: number) => number)) => void
  isPaused: boolean
  setIsPaused: Dispatch<SetStateAction<boolean>>
}
export const AudioContext = createContext<AudioContextType>({
  seconds: 0,
  setSeconds: () => {},
  isPaused: false,
  setIsPaused: () => {},
})
