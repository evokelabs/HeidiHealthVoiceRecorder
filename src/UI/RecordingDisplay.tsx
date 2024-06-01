import { useContext, useEffect } from 'react'

import { formatTime } from '@/libs/helpers'

import { PauseIconSVG } from './SVG/PauseIconSVG'
import { RecordIconSVG } from './SVG/RecordIconSVG'
import { RECORDING_MIC, RECORDING_PAUSED } from '@/libs/constants'
import { AudioContext } from '@/libs/AudioContext'

const RecordingLEDIcon = () => {
  return (
    <div className="absolute animate-pulse -bottom-3.5 left-12 scale-[20%]">
      <RecordIconSVG />
    </div>
  )
}

const PausedLEDIcon = () => {
  return (
    <div className="absolute scale-[21%] -bottom-[0.75em] left-[3.35em]">
      <PauseIconSVG />
    </div>
  )
}

const RecordingDisplay = () => {
  const { isPaused, setSeconds, seconds } = useContext(AudioContext)

  const text = isPaused ? RECORDING_PAUSED : RECORDING_MIC

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (!isPaused) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1)
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [isPaused, setSeconds])

  return (
    <div className="flex flex-col relative">
      <div className="text-3xl rounded-[23px] bg-white p-4 border-primary border-[2px] w-56 shadow-inner relative overflow-hidden ">
        <div
          className={`w-full absolute flex gap-0.5 left-0 bottom-0 opacity-15 duration-300 transition-all ${isPaused ? 'h-1' : 'h-full'}`}>
          <div className="bg-primary w-6 h-full"></div>
          <div className="bg-primary w-6 h-full"></div>
          <div className="bg-primary w-6 h-full"></div>
          <div className="bg-primary w-6 h-full"></div>
          <div className="bg-primary w-6 h-full"></div>
          <div className="bg-primary w-6 h-full"></div>
          <div className="bg-primary w-6 h-full"></div>
          <div className="bg-primary w-6 h-full"></div>
          <div className="bg-primary w-6 h-full"></div>
          <div className="bg-primary w-6 h-full"></div>
          <div className="bg-primary w-6 h-full"></div>
          <div className="bg-primary w-6 h-full"></div>
        </div>
        <p className="uppercase text-lg font-semibold text-center select-none">{text}</p>
      </div>
      {isPaused ? <PausedLEDIcon /> : <RecordingLEDIcon />}
      <div className="relative -right-20 ml-1.5">
        <p className="text-lg font-semibold text-start select-none">{formatTime(seconds)}</p>
      </div>
    </div>
  )
}

export default RecordingDisplay
