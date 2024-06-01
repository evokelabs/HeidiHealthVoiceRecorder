import { PauseIconSVG } from './SVG/PauseIconSVG'

export const MainBigButton = ({ iconSVG, caption }: { iconSVG: JSX.Element; caption: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <div
        className="w-20 h-20 md:w-[7rem] md:h-[7rem] rounded-full bg-white border-4 border-primary drop-shadow hover:drop-shadow-inverse transition-all left-0 top-0 hover:left-2.5 hover:top-2 relative cursor-pointer flex justify-center items-center"
        role="button"
      >
        <div className="relative scale-50 md:scale-100">{iconSVG}</div>
      </div>
      <p className="text-center uppercase w-20 md:w-32 font-semibold text-sm md:text-base leading-none md:leading-none select-none">
        {caption}
      </p>
    </div>
  )
}
