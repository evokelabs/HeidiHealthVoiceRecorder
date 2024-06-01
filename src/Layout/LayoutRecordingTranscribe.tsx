import MainBigButton from '@/UI/MainBigButton'
import { RecordingDisplay } from '@/UI/RecordingDisplay'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { TranscribeIconSVG } from '@/UI/SVG/TranscribeIconSVG'
import { LayoutOptions } from '@/app/page'
import { Dispatch, SetStateAction } from 'react'

const LayoutRecordingTranscribe = ({ setLayout }: { setLayout: Dispatch<SetStateAction<LayoutOptions>> }) => {
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
          seconds={5}
        />
      </div>
    </>
  )
}
export default LayoutRecordingTranscribe
