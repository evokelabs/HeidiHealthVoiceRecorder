'use client'
import { MainBigButton } from '@/UI/MainBigButton'
import { Logos } from '@/UI/Logos'
import { PauseIconSVG } from '@/UI/SVG/PauseIconSVG'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { StopIconSVG } from '@/UI/SVG/StopIconSVG'
import { TranscribeIconSVG } from '@/UI/SVG/TranscribeIconSVG'
import { RecordingDisplay } from '@/UI/RecordingDisplay'

export default function Home() {
  return (
    <main className="w-full h-full relative">
      <div className="flex justify-center mt-6 absolute w-full">
        <Logos />
      </div>
      <div className="h-full relative">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 h-full">
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
          <RecordingDisplay />
        </div>
      </div>
    </main>
  )
}
