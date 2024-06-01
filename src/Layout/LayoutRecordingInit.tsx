import { Dispatch, SetStateAction } from 'react'

import { LayoutOptions } from '@/libs/types'
import { START_RECORDING } from '@/libs/constants'

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
        caption={START_RECORDING}
      />
    </div>
  )
}
export default LayoutRecordingInit
