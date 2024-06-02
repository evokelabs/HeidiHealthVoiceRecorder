import { useContext } from 'react'

import { LayoutOptions } from '@/libs/types'
import { NEW_RECORDING } from '@/libs/constants'

import { UIContext } from '@/libs/context/UIContext'

import MainBigButton from '@/UI/MainBigButton'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { AudioContext } from '@/libs/context/AudioContext'
import TranscribeTextArea from '@/UI/TranscribeTextArea'
import { SpeechToTextContext } from '@/libs/context/SpeechToTextContext'

const LayoutRecordingFinished = () => {
  const { setLayout, layoutAnimateIn, layoutAnimateOut } = useContext(UIContext)
  const { setIsPaused } = useContext(AudioContext)

  //Animation transitions for the layout
  const generateAnimationStyles = () => {
    const styles = {
      opacity: 1,
      maxHeight: '300px',
    }

    if (layoutAnimateIn) {
      styles.opacity = 0
      styles.maxHeight = '0px'
    }

    return styles
  }

  const parentStyle = {
    opacity: layoutAnimateOut ? 0 : 1,
    transition: 'opacity 250ms',
  }

  const animationStyles = generateAnimationStyles()

  return (
    <div
      className="flex flex-col md:flex-col justify-center items-center h-full"
      style={parentStyle}>
      <div
        onClick={() => {
          setLayout(LayoutOptions.LayoutRecordingProgressing)
          setIsPaused(false)
        }}>
        <MainBigButton
          iconSVG={<RecordIconSVG />}
          caption={NEW_RECORDING}
        />
      </div>
      <div
        className="relative overflow-hidden duration-[1250ms] ease-out h-auto mt-3"
        style={animationStyles}>
        <TranscribeTextArea />
      </div>
    </div>
  )
}

export default LayoutRecordingFinished
