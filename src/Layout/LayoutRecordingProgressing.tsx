import { useContext, useEffect } from 'react'

import { LayoutOptions } from '@/libs/types'
import { PAUSE_RECORDING, RESUME_RECORDING, STOP_RECORDING } from '@/libs/constants'

import { UIContext } from '@/libs/UIContext'
import { AudioContext } from '@/libs/AudioContext'

import MainBigButton from '@/UI/MainBigButton'
import RecordingDisplay from '@/UI/RecordingDisplay'
import { PauseIconSVG } from '@/UI/SVG/PauseIconSVG'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { StopIconSVG } from '@/UI/SVG/StopIconSVG'

const LayoutRecordingProgressing = () => {
  const { setIsPressed, setLayout, layoutAnimateIn, layoutAnimateOut } = useContext(UIContext)
  const { isPaused, setIsPaused, startRecording, stopRecording } = useContext(AudioContext)

  //Start recording on component mount
  useEffect(() => {
    startRecording()
  }, [startRecording])

  //Pause or resume recording
  const togglePause = () => {
    setIsPaused(!isPaused)
    setIsPressed(true)
  }

  //Animation transitions for the layout
  const generateAnimationStyles = (direction: string) => {
    const styles = {
      opacity: 1,
      left: '0px',
    }

    if (layoutAnimateIn) {
      styles.opacity = 0
      styles.left = direction === 'left' ? '50px' : '-50px'
    }

    return styles
  }

  const parentStyle = {
    opacity: layoutAnimateOut ? 0.25 : 1,
    transition: 'opacity 250ms',
  }

  const animationLeftStyles = generateAnimationStyles('left')
  const animationRightStyles = generateAnimationStyles('right')

  return (
    <div
      className="flex flex-row justify-center items-center gap-6 relative left-14 w-fit m-auto"
      style={parentStyle}>
      <div
        className="relative duration-300 ease-out"
        style={animationLeftStyles}
        onClick={() => {
          stopRecording()
          setLayout(LayoutOptions.LayoutRecordingTranscribe)
        }}>
        <MainBigButton
          iconSVG={<StopIconSVG />}
          caption={STOP_RECORDING}
        />
      </div>

      <div onClick={togglePause}>
        <MainBigButton
          iconSVG={isPaused ? <RecordIconSVG /> : <PauseIconSVG />}
          caption={isPaused ? RESUME_RECORDING : PAUSE_RECORDING}
        />
      </div>

      <div
        className="relative duration-300 ease-out"
        style={animationRightStyles}>
        <RecordingDisplay />
      </div>
    </div>
  )
}

export default LayoutRecordingProgressing
