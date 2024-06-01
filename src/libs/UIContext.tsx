import { Dispatch, SetStateAction, createContext } from 'react'
import { LayoutOptions } from './types'

interface UIContextType {
  layout: number
  setLayout: Dispatch<SetStateAction<number>>
  isPressed: boolean
  setIsPressed: Dispatch<SetStateAction<boolean>>
}

export const UIContext = createContext<UIContextType>({
  layout: LayoutOptions.LayoutRecordingInit,
  setLayout: () => {},
  isPressed: false,
  setIsPressed: () => {},
})
