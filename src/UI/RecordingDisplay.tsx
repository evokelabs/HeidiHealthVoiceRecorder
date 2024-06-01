import { useEffect, useState } from 'react'

const RECORDING_PAUSED = 'recording paused'
const RECORDING = 'recording mic'

export const RecordingDisplay = ({ isPaused }: { isPaused: boolean }) => {
  const [seconds, setSeconds] = useState(0)
  const text = isPaused ? RECORDING_PAUSED : RECORDING

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
  }, [isPaused])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    const formattedMinutes = minutes.toString().padStart(2, '0')
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-3xl rounded-[23px] bg-white p-4 border-primary border-[2px] w-56 shadow-inner relative overflow-hidden">
        <div className={`w-full h-full absolute flex gap-0.5 left-0 bottom-0 opacity-15 transition-all ${isPaused ? 'h-1' : 'h-full'}`}>
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

      <p className="text-lg font-semibold text-center select-none relative">{formatTime(seconds)}</p>
    </div>
  )
}
