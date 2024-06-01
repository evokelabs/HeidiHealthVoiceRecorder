import { useCallback, useState } from 'react'
import { LayoutOptions } from './types'
import { TRANSITION_TIMING } from './constants'
import LayoutRecordingProgressing from '@/Layout/LayoutRecordingProgressing'
import LayoutRecordingInit from '@/Layout/LayoutRecordingInit'
import LayoutRecordingFinished from '@/Layout/LayoutRecordingFinished'
import LayoutRecordingTranscribe from '@/Layout/LayoutRecordingTranscribe'

export const renderLayout = (layout: LayoutOptions) => {
  switch (layout) {
    case LayoutOptions.LayoutRecordingInit:
      return <LayoutRecordingInit />
    case LayoutOptions.LayoutRecordingProgressing:
      return <LayoutRecordingProgressing />
    case LayoutOptions.LayoutRecordingTranscribe:
      return <LayoutRecordingTranscribe />
    case LayoutOptions.LayoutRecordingFinished:
      return <LayoutRecordingFinished />
    default:
      return null
  }
}

export const useLayoutState = (initialLayout: LayoutOptions) => {
  const [layout, setLayout] = useState(initialLayout)
  const [layoutAnimateIn, setLayoutAnimateIn] = useState(false)
  const [layoutAnimateOut, setLayoutAnimateOut] = useState(false)

  const triggerAnimationIn = useCallback(() => {
    setLayoutAnimateIn(true)
    setTimeout(() => {
      setLayoutAnimateIn(false)
    }, TRANSITION_TIMING)
  }, [])

  const triggerAnimationOut = useCallback(() => {
    setLayoutAnimateOut(true)
    setTimeout(() => {
      setLayoutAnimateOut(false)
    }, TRANSITION_TIMING)
  }, [])

  const changeLayout = useCallback(
    (newLayout: LayoutOptions) => {
      triggerAnimationOut()
      setTimeout(() => {
        triggerAnimationIn()
        setLayout(newLayout)
      }, TRANSITION_TIMING)
    },
    [triggerAnimationIn, triggerAnimationOut]
  )
  const resetLayout = useCallback(() => {
    changeLayout(LayoutOptions.LayoutRecordingInit)
  }, [changeLayout])

  return { layout, setLayout: changeLayout, resetLayout, layoutAnimateIn, layoutAnimateOut }
}
