import MainBigButton from '@/UI/MainBigButton'
import { RecordingDisplay } from '@/UI/RecordingDisplay'
import { PauseIconSVG } from '@/UI/SVG/PauseIconSVG'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { StopIconSVG } from '@/UI/SVG/StopIconSVG'
import { LayoutOptions } from '@/app/page'
import { Dispatch, SetStateAction, useState } from 'react'

const PausedIconButton = ({ setIsPaused }: { setIsPaused: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div onClick={() => setIsPaused(true)}>
      <MainBigButton
        iconSVG={<PauseIconSVG />}
        caption={'pause recording'}
      />
    </div>
  )
}

const ResumeIconButton = ({ setIsPaused }: { setIsPaused: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div onClick={() => setIsPaused(false)}>
      <MainBigButton
        iconSVG={<RecordIconSVG />}
        caption={'resume recording'}
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

  return (
    <>
      <div onClick={() => setLayout(LayoutOptions.LayoutRecordingTranscribe)}>
        <MainBigButton
          iconSVG={<StopIconSVG />}
          caption={'stop recording'}
        />
      </div>

      {isPaused ? <ResumeIconButton setIsPaused={setIsPaused} /> : <PausedIconButton setIsPaused={setIsPaused} />}

      <RecordingDisplay
        isPaused={isPaused}
        setSeconds={setSeconds}
        seconds={seconds}
      />
    </>
  )
}
export default LayoutRecordingProgressing
