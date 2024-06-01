import { ErrorIconSVG } from './SVG/ErrorIconSVG'

export const OfflineAlert = () => {
  return (
    <div className="absolute -right-1/2 -top-2 flex flex-row items-center gap-1 z-10">
      <ErrorIconSVG />
      <div className="uppercase font-medium relative">offline</div>
    </div>
  )
}
