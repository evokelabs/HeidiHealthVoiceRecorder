import MainBigButton from '@/UI/MainBigButton'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { LayoutOptions } from '@/app/page'
import { Dispatch, SetStateAction } from 'react'

const LayoutRecordingInit = ({
  setLayout,
  setSeconds,
}: {
  setLayout: Dispatch<SetStateAction<LayoutOptions>>
  setSeconds: Dispatch<SetStateAction<number>>
}) => {
  return (
    <div
      onClick={() => {
        setLayout(LayoutOptions.LayoutRecordingProgressing)
      }}>
      <MainBigButton
        iconSVG={<RecordIconSVG />}
        caption={'start recording'}
      />
    </div>
  )
}
export default LayoutRecordingInit
