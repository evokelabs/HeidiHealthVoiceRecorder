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
    <>
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
    </>
  )
}
export default LayoutRecordingFinished
