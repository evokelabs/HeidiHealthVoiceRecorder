import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { LayoutOptions } from '@/libs/types'
import { PAUSE_RECORDING, RESUME_RECORDING, STOP_RECORDING } from '@/libs/constants'

import MainBigButton from '@/UI/MainBigButton'
import RecordingDisplay from '@/UI/RecordingDisplay'
import { PauseIconSVG } from '@/UI/SVG/PauseIconSVG'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { StopIconSVG } from '@/UI/SVG/StopIconSVG'

const LayoutRecordingProgressing = ({
  setLayout,
  setSeconds,
  seconds,
}: {
  setLayout: Dispatch<SetStateAction<LayoutOptions>>
  setSeconds: Dispatch<SetStateAction<number>>
  seconds: number
}) => {
  const [isPaused, setIsPaused] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    setSeconds(0)
  }, [setSeconds])

  return (
    <>
      <div onClick={() => setLayout(LayoutOptions.LayoutRecordingTranscribe)}>
        <MainBigButton
          iconSVG={<StopIconSVG />}
          caption={STOP_RECORDING}
        />
      </div>

      {isPaused ? (
        <div
          onClick={() => {
            setIsPressed(true)
            setIsPaused(false)
          }}>
          <MainBigButton
            iconSVG={<RecordIconSVG />}
            caption={RESUME_RECORDING}
            isPressed={isPressed}
            setIsPressed={setIsPressed}
          />
        </div>
      ) : (
        <div
          onClick={() => {
            setIsPressed(true)
            setIsPaused(true)
          }}>
          <MainBigButton
            iconSVG={<PauseIconSVG />}
            caption={PAUSE_RECORDING}
            isPressed={isPressed}
            setIsPressed={setIsPressed}
          />
        </div>
      )}

      <RecordingDisplay
        isPaused={isPaused}
        setSeconds={setSeconds}
        seconds={seconds}
      />
    </>
  )
}
export default LayoutRecordingProgressing
