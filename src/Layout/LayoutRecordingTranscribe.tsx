import MainBigButton from '@/UI/MainBigButton'
import { RecordingDisplay } from '@/UI/RecordingDisplay'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { TranscribeIconSVG } from '@/UI/SVG/TranscribeIconSVG'
import { LayoutOptions, formatTime } from '@/app/page'
import { Dispatch, SetStateAction } from 'react'

const LayoutRecordingTranscribe = ({ setLayout, seconds }: { setLayout: Dispatch<SetStateAction<LayoutOptions>>; seconds: number }) => {
  return (
    <>
      <div onClick={() => setLayout(LayoutOptions.LayoutRecordingProgressing)}>
        <MainBigButton
          iconSVG={<RecordIconSVG />}
          caption={'new recording'}
        />
      </div>
      <div onClick={() => setLayout(LayoutOptions.LayoutRecordingFinished)}>
        <MainBigButton
          iconSVG={<TranscribeIconSVG />}
          caption={'transcribe audio'}
          seconds={seconds}
        />
      </div>
    </>
  )
}
export default LayoutRecordingTranscribe
