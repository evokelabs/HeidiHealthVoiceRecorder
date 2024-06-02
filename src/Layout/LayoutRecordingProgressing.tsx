import { useContext, useEffect } from 'react'

import { LayoutOptions } from '@/libs/types'
import { PAUSE_RECORDING, RESUME_RECORDING, STOP_RECORDING } from '@/libs/constants'

import { UIContext } from '@/libs/context/UIContext'
import { AudioContext } from '@/libs/context/AudioContext'

import MainBigButton from '@/UI/MainBigButton'
import RecordingDisplay from '@/UI/RecordingDisplay'
import { PauseIconSVG } from '@/UI/SVG/PauseIconSVG'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { StopIconSVG } from '@/UI/SVG/StopIconSVG'
import { SpeechToTextContext } from '@/libs/context/SpeechToTextContext'

const LayoutRecordingProgressing = () => {
  const { setIsPressed, setLayout, layoutAnimateIn, layoutAnimateOut } = useContext(UIContext)
  const { isPaused, setIsPaused, startRecording, stopRecording, microphoneError } = useContext(AudioContext)

  const { startSpeechRecognition, stopSpeechRecognition, resetSpeechRecognition } = useContext(SpeechToTextContext)

  //Start recording on component mount
  useEffect(() => {
    startRecording()
    startSpeechRecognition()
    resetSpeechRecognition()
  }, [])

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
      className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 relative md:left-14 w-fit m-auto pt-10 md:pt-0"
      style={{ ...parentStyle, pointerEvents: microphoneError ? 'none' : 'auto' }}>
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

      {isPaused ? (
        <div
          onClick={() => {
            setIsPaused(false)
            setIsPressed(true)
            startSpeechRecognition()
          }}>
          <MainBigButton
            iconSVG={<RecordIconSVG />}
            caption={RESUME_RECORDING}
          />
        </div>
      ) : (
        <div
          onClick={() => {
            setIsPaused(true)
            setIsPressed(true)
            stopSpeechRecognition()
          }}>
          <MainBigButton
            iconSVG={<PauseIconSVG />}
            caption={PAUSE_RECORDING}
          />
        </div>
      )}
      <div
        className="relative duration-300 ease-out"
        style={animationRightStyles}>
        <RecordingDisplay />
      </div>
    </div>
  )
}

export default LayoutRecordingProgressing
