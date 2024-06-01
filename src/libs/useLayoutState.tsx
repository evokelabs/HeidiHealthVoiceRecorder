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

const useLayoutState = (initialLayout: LayoutOptions) => {
  const [layout, setLayout] = useState(initialLayout)
  const [animate, setAnimate] = useState(false)

  const triggerAnimation = useCallback(() => {
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
    }, TRANSITION_TIMING)
  }, [])

  const changeLayout = useCallback(
    (newLayout: LayoutOptions) => {
      triggerAnimation()
      setTimeout(() => {
        triggerAnimation()
        setLayout(newLayout)
      }, TRANSITION_TIMING)
    },
    [triggerAnimation]
  )

  const resetLayout = useCallback(() => {
    changeLayout(LayoutOptions.LayoutRecordingInit)
  }, [changeLayout])

  return { layout, setLayout: changeLayout, resetLayout, animate }
}

export default useLayoutState
