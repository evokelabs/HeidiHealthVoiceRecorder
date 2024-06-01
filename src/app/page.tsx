import { Button } from '@/UI/Button'
import { Logos } from '@/UI/Logos'
import { ErrorIconSVG } from '@/UI/SVG/ErrorIconSVG'
import { PauseIconSVG } from '@/UI/SVG/PauseIconSVG'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { StopIconSVG } from '@/UI/SVG/StopIconSVG'
import { TranscribeIconSVG } from '@/UI/SVG/TranscribeIconSVG'

export default function Home() {
  return (
    <main className="w-full relative">
      <div className="flex justify-center mt-6 absolute w-full">
        <Logos />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 h-screen relative">
        <Button iconSVG={<RecordIconSVG />} caption={'start recording'} />
        <Button iconSVG={<PauseIconSVG />} caption={'pause recording'} />
        <Button iconSVG={<StopIconSVG />} caption={'stop recording'} />
        <Button iconSVG={<TranscribeIconSVG />} caption={'transcribe audio'} />
      </div>
    </main>
  )
}
