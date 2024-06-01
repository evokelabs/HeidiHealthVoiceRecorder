import { useContext } from 'react'

import { LayoutOptions } from '@/libs/types'
import { NEW_RECORDING } from '@/libs/constants'

import { UIContext } from '@/libs/UIContext'

import MainBigButton from '@/UI/MainBigButton'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { AudioContext } from '@/libs/AudioContext'

const LayoutRecordingFinished = () => {
  const { setLayout } = useContext(UIContext)
  const { setIsPaused } = useContext(AudioContext)
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
      <div
        onClick={() => {
          setLayout(LayoutOptions.LayoutRecordingProgressing)
          setIsPaused(false)
        }}>
        <MainBigButton
          iconSVG={<RecordIconSVG />}
          caption={NEW_RECORDING}
        />
      </div>
    </div>
  )
}
export default LayoutRecordingFinished
