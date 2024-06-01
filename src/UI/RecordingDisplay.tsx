export const RecordingDisplay = ({ seconds = 0 }: { seconds: number }) => {
  const RECORDING_PAUSED = 'recording paused'
  const RECORDING = 'recording mic'

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    const formattedMinutes = minutes.toString().padStart(2, '0')
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-3xl rounded-[23px] bg-white p-4 border-primary border-[3px] w-56 shadow-inner ">
        <p className="uppercase text-lg font-semibold text-center select-none">{RECORDING}</p>
      </div>
      <p className="text-lg font-semibold text-center select-none">{formatTime(seconds)}</p>
    </div>
  )
}
