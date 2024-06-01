import MainBigButton from '@/UI/MainBigButton'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import TranscribeTextArea from '@/UI/TranscribeTextArea'
import { LayoutOptions } from '@/app/page'
import { Dispatch, SetStateAction } from 'react'

const LayoutRecordingFinished = ({ setLayout }: { setLayout: Dispatch<SetStateAction<LayoutOptions>> }) => {
  return (
    <>
      <div onClick={() => setLayout(LayoutOptions.LayoutRecordingProgressing)}>
        <MainBigButton
          iconSVG={<RecordIconSVG />}
          caption={'new recording'}
        />
      </div>
    </>
  )
}
export default LayoutRecordingFinished
