import { Dispatch, SetStateAction } from 'react'

import { LayoutOptions } from '@/libs/types'

import MainBigButton from '@/UI/MainBigButton'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { TranscribeIconSVG } from '@/UI/SVG/TranscribeIconSVG'
import { NEW_RECORDING, TRANSCRIBE_AUDIO } from '@/libs/constants'

const LayoutRecordingTranscribe = ({ setLayout, seconds }: { setLayout: Dispatch<SetStateAction<LayoutOptions>>; seconds: number }) => {
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
          seconds={seconds}
        />
      </div>
    </>
  )
}
export default LayoutRecordingTranscribe
