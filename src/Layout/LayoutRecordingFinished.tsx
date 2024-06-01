import { Dispatch, SetStateAction } from 'react'

import { LayoutOptions } from '@/libs/types'

import MainBigButton from '@/UI/MainBigButton'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'

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
