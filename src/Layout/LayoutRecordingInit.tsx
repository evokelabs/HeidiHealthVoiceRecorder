import { useContext } from 'react'

import { LayoutOptions } from '@/libs/types'
import { START_RECORDING } from '@/libs/constants'

import MainBigButton from '@/UI/MainBigButton'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { UIContext } from '@/libs/UIContext'

const LayoutRecordingInit = () => {
  const { setLayout } = useContext(UIContext)
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
