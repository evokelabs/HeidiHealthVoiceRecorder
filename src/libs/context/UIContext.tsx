import { createContext } from 'react'
import { LayoutOptions } from '../hooks/useLayoutState'

export interface UIContextType {
  layout: LayoutOptions
  setLayout: (value: LayoutOptions) => void
  isPressed: boolean
  setIsPressed: (value: boolean) => void
  layoutAnimateIn: boolean
  layoutAnimateOut: boolean
}

export const UIContext = createContext<UIContextType>({
  layout: 0,
  setLayout: () => {},
  isPressed: false,
  setIsPressed: () => {},
  layoutAnimateIn: false,
  layoutAnimateOut: false,
})
