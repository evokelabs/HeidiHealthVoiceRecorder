import { Dispatch, SetStateAction } from 'react'

import { LayoutOptions } from '@/libs/types'

import MainBigButton from '@/UI/MainBigButton'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'

const LayoutRecordingInit = ({ setLayout }: { setLayout: Dispatch<SetStateAction<LayoutOptions>> }) => {
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
