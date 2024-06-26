import { useContext } from 'react'

import { START_RECORDING } from '@/libs/constants'

import { UIContext } from '@/libs/context/UIContext'

import MainBigButton from '@/UI/MainBigButton'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { LayoutOptions } from '@/libs/hooks/useLayoutState'

const LayoutRecordingInit = () => {
  const { setLayout, setIsPressed } = useContext(UIContext)
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 duration-200 relative">
      <div
        onClick={() => {
          setIsPressed(true)
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
