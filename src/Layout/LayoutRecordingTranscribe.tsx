import { useContext } from 'react'

import { LayoutOptions } from '@/libs/types'
import { NEW_RECORDING, TRANSCRIBE_AUDIO } from '@/libs/constants'

import { UIContext } from '@/libs/UIContext'

import MainBigButton from '@/UI/MainBigButton'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { TranscribeIconSVG } from '@/UI/SVG/TranscribeIconSVG'
import { AudioContext } from '@/libs/AudioContext'

const LayoutRecordingTranscribe = () => {
  const { setLayout, layoutAnimateIn, layoutAnimateOut } = useContext(UIContext)
  const { setIsPaused } = useContext(AudioContext)

  //Animation transitions for the layout
  const generateAnimationStyles = (direction: string) => {
    const styles = {
      opacity: 1,
      left: '0px',
    }

    if (layoutAnimateIn) {
      styles.opacity = 0.25
      styles.left = direction === 'left' ? '60px' : '-70px'
    }

    if (layoutAnimateOut) {
      styles.opacity = 0
    }
    return styles
  }

  const animationLeftStyles = generateAnimationStyles('left')
  const animationRightStyles = generateAnimationStyles('right')

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      <div
        className="relative duration-300 ease-out"
        style={animationRightStyles}
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
        className="relative duration-300 ease-out"
        style={animationLeftStyles}
        onClick={() => setLayout(LayoutOptions.LayoutRecordingFinished)}>
        <MainBigButton
          iconSVG={<TranscribeIconSVG />}
          caption={TRANSCRIBE_AUDIO}
        />
      </div>
    </div>
  )
}
export default LayoutRecordingTranscribe
