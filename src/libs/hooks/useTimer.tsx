import { useEffect } from 'react'

export const useTimer = (
  isPaused: boolean,
  resetTimer: boolean,
  seconds: number,
  setSeconds: (value: number | ((prevSeconds: number) => number)) => void
) => {
  useEffect(() => {
    if (resetTimer) {
      setSeconds(0)
    }
  }, [resetTimer, setSeconds])

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

  return seconds
}
