'use client'

import { useState } from 'react'

import { LayoutOptions } from '@/libs/types'

import { Logos } from '@/UI/Logos'
import LayoutRecordingFinished from '@/Layout/LayoutRecordingFinished'
import LayoutRecordingInit from '@/Layout/LayoutRecordingInit'
import LayoutRecordingTranscribe from '@/Layout/LayoutRecordingTranscribe'
import LayoutRecordingProgressing from '@/Layout/LayoutRecordingProgressing'
import TranscribeTextArea from '@/UI/TranscribeTextArea'

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
            {layout === LayoutOptions.LayoutRecordingInit && <LayoutRecordingInit setLayout={setLayout} />}
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
