import { Dispatch, SetStateAction, useCallback, useContext, useEffect } from 'react'

import { formatTime } from '@/libs/helpers'

import { TranscribeIconSVG } from './SVG/TranscribeIconSVG'
import { OfflineAlert } from './OfflineAlert'
import { AudioContext } from '@/libs/AudioContext'
import { UIContext } from '@/libs/UIContext'

const IconSVG = ({ iconSVG }: { iconSVG: JSX.Element }) => {
  return <div className="relative scale-50 md:scale-100 ">{iconSVG}</div>
}

const IconTranscribeTimerSVG = ({ seconds }: { seconds: number }) => {
  return (
    <>
      <div className="relative scale-50 md:scale-100 bottom-1.5">
        <TranscribeIconSVG />
      </div>
      <p className="text-lg font-semibold text-center select-none absolute bottom-2">{formatTime(seconds)}</p>
    </>
  )
}

const MainBigButton = ({ iconSVG, caption }: { iconSVG: JSX.Element; caption: string }) => {
  const { setIsPressed, isPressed } = useContext(UIContext)
  const { seconds } = useContext(AudioContext)

  // Shows the timer length if transcribe SVG and seconds are passed
  const hasTranscribeLength = iconSVG.type === TranscribeIconSVG && seconds

  // Prevents distracting hover animation on record button while toggling pause/resume
  const isMouseOverPlayPause = isPressed

  const resetPressed = useCallback(() => {
    if (!setIsPressed) return
    setIsPressed(false)
  }, [setIsPressed])

  useEffect(() => {
    const timeout = setTimeout(() => {
      resetPressed()
    }, 200)

    return () => {
      clearTimeout(timeout)
    }
  }, [isPressed, resetPressed, setIsPressed])
  return (
    <>
      <div
        className="flex flex-col gap-4 relative group"
        onMouseLeave={() => resetPressed()}>
        <div
          className={`w-20 h-20 md:w-[7rem] md:h-[7rem] rounded-full bg-white border-4 border-primary drop-shadow transition-all left-0 top-0 relative cursor-pointer flex flex-col justify-center items-center group-hover:drop-shadow-inverse group-hover:top-2 group-hover:left-2.5  ${
            isMouseOverPlayPause ? 'duration-0' : 'duration-150'
          }`}
          role="button">
          {hasTranscribeLength ? <IconTranscribeTimerSVG seconds={seconds} /> : <IconSVG iconSVG={iconSVG} />}
        </div>
        {/* {iconSVG.type === TranscribeIconSVG && <OfflineAlert />} */}
      </div>
      <p className="text-center uppercase w-20 md:w-[7rem] font-semibold text-sm md:text-base leading-none md:leading-none select-none mt-4 relative left-1 ">
        {caption}
      </p>
    </>
  )
}

export default MainBigButton
