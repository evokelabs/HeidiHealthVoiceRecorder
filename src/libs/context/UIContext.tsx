import { createContext } from 'react'
import { LayoutOptions } from '../types'

export interface UIContextType {
  layout: LayoutOptions
  setLayout: (value: LayoutOptions) => void
  isPressed: boolean
  setIsPressed: (value: boolean) => void
  layoutAnimateIn: boolean
  layoutAnimateOut: boolean
}

export const UIContext = createContext<UIContextType>({
  layout: LayoutOptions.LayoutRecordingInit,
  setLayout: () => {},
  isPressed: false,
  setIsPressed: () => {},
  layoutAnimateIn: false,
  layoutAnimateOut: false,
})
