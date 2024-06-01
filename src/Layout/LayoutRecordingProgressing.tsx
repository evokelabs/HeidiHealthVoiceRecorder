import MainBigButton from '@/UI/MainBigButton'
import { PauseIconSVG } from '@/UI/SVG/PauseIconSVG'
import { StopIconSVG } from '@/UI/SVG/StopIconSVG'

const LayoutRecordingProgressing = () => {
  return (
    <>
      <MainBigButton
        iconSVG={<PauseIconSVG />}
        caption={'pause recording'}
      />
      <MainBigButton
        iconSVG={<StopIconSVG />}
        caption={'stop recording'}
      />
    </>
  )
}
export default LayoutRecordingProgressing
