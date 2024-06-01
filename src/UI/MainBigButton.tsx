import { OfflineAlert } from './OfflineAlert'
import { TranscribeIconSVG } from './SVG/TranscribeIconSVG'

const IconSVG = ({ iconSVG }: { iconSVG: JSX.Element }) => {
  return <div className="relative scale-50 md:scale-100 ">{iconSVG}</div>
}

const TranscribeTimerIcon = ({ seconds }: { seconds: number }) => {
  return (
    <>
      <div className="relative scale-50 md:scale-100 bottom-1.5">
        <TranscribeIconSVG />
      </div>
      <p className="text-lg font-semibold text-center select-none absolute bottom-2">{seconds}</p>
    </>
  )
}

const MainBigButton = ({ iconSVG, caption, seconds }: { iconSVG: JSX.Element; caption: string; seconds?: number }) => {
  return (
    <div className="flex flex-col gap-4 relative group">
      <div
        className="w-20 h-20 md:w-[7rem] md:h-[7rem] rounded-full bg-white border-4 border-primary drop-shadow group-hover:drop-shadow-inverse transition-all left-0 top-0 group-hover:left-2.5 group-hover:top-2 relative cursor-pointer flex flex-col justify-center items-center"
        role="button">
        {iconSVG.type === TranscribeIconSVG && seconds ? <TranscribeTimerIcon seconds={seconds} /> : <IconSVG iconSVG={iconSVG} />}
      </div>
      {iconSVG.type === TranscribeIconSVG && <OfflineAlert />}
      <p className="text-center uppercase w-20 md:w-32 font-semibold text-sm md:text-base leading-none md:leading-none select-none">
        {caption}
      </p>
    </div>
  )
}

export default MainBigButton
