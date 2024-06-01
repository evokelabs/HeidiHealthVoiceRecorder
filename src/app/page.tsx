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
        <Button IconSVG={<RecordIconSVG />} />
        <Button IconSVG={<PauseIconSVG />} />
        <Button IconSVG={<StopIconSVG />} />
        <Button IconSVG={<TranscribeIconSVG />} />
      </div>
    </main>
  )
}
