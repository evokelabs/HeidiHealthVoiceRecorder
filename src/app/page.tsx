'use client'
import MainBigButton from '@/UI/MainBigButton'
import { Logos } from '@/UI/Logos'
import { PauseIconSVG } from '@/UI/SVG/PauseIconSVG'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { StopIconSVG } from '@/UI/SVG/StopIconSVG'
import { TranscribeIconSVG } from '@/UI/SVG/TranscribeIconSVG'
import { RecordingDisplay } from '@/UI/RecordingDisplay'
import TranscribeTextArea from '@/UI/TranscribeTextArea'

export default function Home() {
  return (
    <main className="w-full h-full relative">
      <div className="flex justify-center mt-6 absolute w-full">
        <Logos />
      </div>
      <div className="h-full relative">
        <div className="flex flex-col h-full justify-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
            <MainBigButton
              iconSVG={<RecordIconSVG />}
              caption={'start recording'}
            />
            <MainBigButton
              iconSVG={<PauseIconSVG />}
              caption={'pause recording'}
            />
            <MainBigButton
              iconSVG={<StopIconSVG />}
              caption={'stop recording'}
            />
            <MainBigButton
              iconSVG={<TranscribeIconSVG />}
              caption={'transcribe audio'}
            />
            <MainBigButton
              iconSVG={<TranscribeIconSVG />}
              caption={'transcribe audio'}
              seconds={5}
            />
            <RecordingDisplay />
          </div>
          <TranscribeTextArea />
        </div>
      </div>
    </main>
  )
}
