import { Button } from '@/UI/Button'
import { Logos } from '@/UI/Logos'
import { ErrorIconSVG } from '@/UI/SVG/ErrorIconSVG'
import { PauseIconSVG } from '@/UI/SVG/PauseIconSVG'
import { RecordIconSVG } from '@/UI/SVG/RecordIconSVG'
import { StopIconSVG } from '@/UI/SVG/StopIconSVG'
import { TranscribeIconSVG } from '@/UI/SVG/TranscribeIconSVG'

export default function Home() {
  return (
    <main className="w-full ">
      <div className="flex justify-center m-6">
        <Logos />

        <ErrorIconSVG />
        <PauseIconSVG />
        <RecordIconSVG />
        <StopIconSVG />
        <TranscribeIconSVG />
        <Button />
      </div>
    </main>
  )
}
