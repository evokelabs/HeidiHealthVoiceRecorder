import { useContext } from 'react'

import { LayoutOptions } from '@/libs/types'
import { START_RECORDING } from '@/libs/constants'

import { UIContext } from '@/libs/UIContext'

import MainBigButton from '@/UI/MainBigButton'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'

const LayoutRecordingInit = () => {
  const { setLayout } = useContext(UIContext)
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
      <div
        onClick={() => {
          setLayout(LayoutOptions.LayoutRecordingProgressing)
        }}>
        <MainBigButton
          iconSVG={<RecordIconSVG />}
          caption={START_RECORDING}
        />
      </div>
    </div>
  )
}
export default LayoutRecordingInit
