import { Dispatch, SetStateAction, createContext } from 'react'
import { LayoutOptions } from './types'

export interface UIContextType {
  layout: LayoutOptions
  setLayout: (value: LayoutOptions) => void
  isPressed: boolean
  setIsPressed: (value: boolean) => void
}

export const UIContext = createContext<UIContextType>({
  layout: LayoutOptions.LayoutRecordingInit,
  setLayout: () => {},
  isPressed: false,
  setIsPressed: () => {},
})
