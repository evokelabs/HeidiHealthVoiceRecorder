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
  const { setIsPressed, setLayout } = useContext(UIContext)
  const { isPaused, setIsPaused, startRecording, stopRecording } = useContext(AudioContext)

  useEffect(() => {
    startRecording()
  }, [startRecording])

  return (
    <div className="flex flex-row justify-center items-center gap-7 relative left-14 w-fit m-auto">
      <div
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
          }}>
          <MainBigButton
            iconSVG={<PauseIconSVG />}
            caption={PAUSE_RECORDING}
          />
        </div>
      )}

      <RecordingDisplay />
    </div>
  )
}
export default LayoutRecordingProgressing
