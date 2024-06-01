import MainBigButton from '@/UI/MainBigButton'
import { RecordingDisplay } from '@/UI/RecordingDisplay'
import { TranscribeIconSVG } from '@/UI/SVG/TranscribeIconSVG'

const LayoutRecordingTranscribe = () => {
  return (
    <>
      <MainBigButton
        iconSVG={<TranscribeIconSVG />}
        caption={'transcribe audio'}
      />
      <MainBigButton
        iconSVG={<TranscribeIconSVG />}
        caption={'transcribe audio'}
        seconds={5}
      />
      <RecordingDisplay />
    </>
  )
}
export default LayoutRecordingTranscribe
