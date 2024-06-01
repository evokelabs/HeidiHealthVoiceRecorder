import MainBigButton from '@/UI/MainBigButton'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'

const LayoutRecordingInit = () => {
  return (
    <MainBigButton
      iconSVG={<RecordIconSVG />}
      caption={'start recording'}
    />
  )
}
export default LayoutRecordingInit
