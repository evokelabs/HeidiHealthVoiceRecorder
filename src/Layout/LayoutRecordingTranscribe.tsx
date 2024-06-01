import { Dispatch, SetStateAction, useContext } from 'react'

import { LayoutOptions } from '@/libs/types'
import { NEW_RECORDING, TRANSCRIBE_AUDIO } from '@/libs/constants'

import MainBigButton from '@/UI/MainBigButton'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { TranscribeIconSVG } from '@/UI/SVG/TranscribeIconSVG'
import { UIContext } from '@/libs/UIContext'

const LayoutRecordingTranscribe = () => {
  const { setLayout } = useContext(UIContext)
  return (
    <>
      <div onClick={() => setLayout(LayoutOptions.LayoutRecordingProgressing)}>
        <MainBigButton
          iconSVG={<RecordIconSVG />}
          caption={NEW_RECORDING}
        />
      </div>
      <div onClick={() => setLayout(LayoutOptions.LayoutRecordingFinished)}>
        <MainBigButton
          iconSVG={<TranscribeIconSVG />}
          caption={TRANSCRIBE_AUDIO}
        />
      </div>
    </>
  )
}
export default LayoutRecordingTranscribe
