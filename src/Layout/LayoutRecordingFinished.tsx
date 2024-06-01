import { Dispatch, SetStateAction } from 'react'

import { LayoutOptions } from '@/libs/types'
import { NEW_RECORDING } from '@/libs/constants'

import MainBigButton from '@/UI/MainBigButton'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'

const LayoutRecordingFinished = ({ setLayout }: { setLayout: Dispatch<SetStateAction<LayoutOptions>> }) => {
  return (
    <>
      <div onClick={() => setLayout(LayoutOptions.LayoutRecordingProgressing)}>
        <MainBigButton
          iconSVG={<RecordIconSVG />}
          caption={NEW_RECORDING}
        />
      </div>
    </>
  )
}
export default LayoutRecordingFinished
