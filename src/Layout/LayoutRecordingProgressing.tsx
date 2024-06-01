import MainBigButton from '@/UI/MainBigButton'
import { RecordingDisplay } from '@/UI/RecordingDisplay'
import { PauseIconSVG } from '@/UI/SVG/PauseIconSVG'
import { StopIconSVG } from '@/UI/SVG/StopIconSVG'
import { LayoutOptions } from '@/app/page'
import { Dispatch, SetStateAction } from 'react'

const LayoutRecordingProgressing = ({ setLayout }: { setLayout: Dispatch<SetStateAction<LayoutOptions>> }) => {
  return (
    <>
      <div onClick={() => setLayout(LayoutOptions.LayoutRecordingTranscribe)}>
        <MainBigButton
          iconSVG={<StopIconSVG />}
          caption={'stop recording'}
        />
      </div>
      <MainBigButton
        iconSVG={<PauseIconSVG />}
        caption={'pause recording'}
      />
      <RecordingDisplay />
    </>
  )
}
export default LayoutRecordingProgressing
