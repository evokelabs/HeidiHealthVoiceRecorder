'use client'

import LayoutRecordingFinished from '@/Layout/LayoutRecordingFinished'
import LayoutRecordingInit from '@/Layout/LayoutRecordingInit'
import LayoutRecordingTranscribe from '@/Layout/LayoutRecordingTranscribe'
import LayoutRecordingProgressing from '@/Layout/LayoutRecordingProgressing'
import TranscribeTextArea from '@/UI/TranscribeTextArea'

import { Logos } from '@/UI/Logos'
import { useState } from 'react'

export const enum LayoutOptions {
  LayoutRecordingInit,
  LayoutRecordingProgressing,
  LayoutRecordingTranscribe,
  LayoutRecordingFinished,
}

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  const formattedMinutes = minutes.toString().padStart(2, '0')
  const formattedSeconds = remainingSeconds.toString().padStart(2, '0')

  return `${formattedMinutes}:${formattedSeconds}`
}

const Home = () => {
  const [layout, setLayout] = useState(LayoutOptions.LayoutRecordingInit)
  const [seconds, setSeconds] = useState(0)

  return (
    <main className="w-full h-full relative">
      <div
        className="flex justify-center mt-6 absolute w-full z-10 cursor-pointer"
        onClick={() => setLayout(LayoutOptions.LayoutRecordingInit)}>
        <Logos />
      </div>
      <div className="h-full relative">
        <div className="flex flex-col h-full justify-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
            {layout === LayoutOptions.LayoutRecordingInit && <LayoutRecordingInit setLayout={setLayout} setSeconds={setSeconds} />}
            {layout === LayoutOptions.LayoutRecordingProgressing && (
              <LayoutRecordingProgressing
                setLayout={setLayout}
                setSeconds={setSeconds}
                seconds={seconds}
              />
            )}
            {layout === LayoutOptions.LayoutRecordingTranscribe && (
              <LayoutRecordingTranscribe
                setLayout={setLayout}
                seconds={seconds}
              />
            )}
            {layout === LayoutOptions.LayoutRecordingFinished && <LayoutRecordingFinished setLayout={setLayout} />}
          </div>
          {layout === LayoutOptions.LayoutRecordingFinished && <TranscribeTextArea />}
        </div>
      </div>
    </main>
  )
}

export default Home
