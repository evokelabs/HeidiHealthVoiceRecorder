import { PauseIconSVG } from './SVG/PauseIconSVG'

export const Button = ({ IconSVG }: { IconSVG: any }) => {
  return (
    <div
      className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-white border-4 border-primary drop-shadow hover:drop-shadow-inverse transition-all left-0 top-0 hover:left-2.5 hover:top-2 relative cursor-pointer flex justify-center items-center"
      role="button"
    >
      <div className="relative scale-50 md:scale-100">{IconSVG}</div>
    </div>
  )
}
