import { useContext } from 'react'

import { LayoutOptions } from '@/libs/types'
import { NEW_RECORDING, TRANSCRIBE_AUDIO } from '@/libs/constants'

import { UIContext } from '@/libs/UIContext'

import MainBigButton from '@/UI/MainBigButton'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { TranscribeIconSVG } from '@/UI/SVG/TranscribeIconSVG'
import { AudioContext } from '@/libs/AudioContext'

const LayoutRecordingTranscribe = () => {
  const { setLayout } = useContext(UIContext)
  const { isPaused, setIsPaused, startRecording, stopRecording } = useContext(AudioContext)
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
