import MainBigButton from '@/UI/MainBigButton'
import { RecordingDisplay } from '@/UI/RecordingDisplay'
import { PauseIconSVG } from '@/UI/SVG/PauseIconSVG'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { StopIconSVG } from '@/UI/SVG/StopIconSVG'
import { LayoutOptions } from '@/app/page'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const PausedIconButton = ({
  setIsPaused,
  setIsPressed,
  isPressed,
}: {
  setIsPaused: Dispatch<SetStateAction<boolean>>
  setIsPressed: Dispatch<SetStateAction<boolean>>
  isPressed: boolean
}) => {
  return (
    <div
      onClick={() => {
        setIsPressed(true)
        setIsPaused(true)
      }}>
      <MainBigButton
        iconSVG={<PauseIconSVG />}
        caption={'pause recording'}
        isPressed={isPressed}
        setIsPressed={setIsPressed}
      />
    </div>
  )
}

const ResumeIconButton = ({
  setIsPaused,
  setIsPressed,
  isPressed,
}: {
  setIsPaused: Dispatch<SetStateAction<boolean>>
  setIsPressed: Dispatch<SetStateAction<boolean>>
  isPressed: boolean
}) => {
  return (
    <div
      onClick={() => {
        setIsPressed(true)
        setIsPaused(false)
      }}>
      <MainBigButton
        iconSVG={<RecordIconSVG />}
        caption={'resume recording'}
        isPressed={isPressed}
        setIsPressed={setIsPressed}
      />
    </div>
  )
}

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
          caption={'stop recording'}
        />
      </div>

      {isPaused ? (
        <ResumeIconButton
          setIsPressed={setIsPressed}
          setIsPaused={setIsPaused}
          isPressed={isPressed}
        />
      ) : (
        <PausedIconButton
          setIsPressed={setIsPressed}
          setIsPaused={setIsPaused}
          isPressed={isPressed}
        />
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
