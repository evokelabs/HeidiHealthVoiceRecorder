'use client'
import { Logos } from '@/UI/Logos'
import LayoutRecordingFinished from '@/Layout/LayoutRecordingFinished'
import LayoutRecordingInit from '@/Layout/LayoutRecordingInit'
import LayoutRecordingTranscribe from '@/Layout/LayoutRecordingTranscribe'
import LayoutRecordingProgressing from '@/Layout/LayoutRecordingProgressing'
import { useState } from 'react'
import TranscribeTextArea from '@/UI/TranscribeTextArea'

export const enum LayoutOptions {
  LayoutRecordingInit,
  LayoutRecordingProgressing,
  LayoutRecordingTranscribe,
  LayoutRecordingFinished,
}

const Home = () => {
  const [layout, setLayout] = useState(LayoutOptions.LayoutRecordingInit)
  return (
    <main className="w-full h-full relative">
      <div className="flex justify-center mt-6 absolute w-full">
        <Logos />
      </div>
      <div className="h-full relative">
        <div className="flex flex-col h-full justify-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
            {layout === LayoutOptions.LayoutRecordingInit && <LayoutRecordingInit setLayout={setLayout} />}
            {layout === LayoutOptions.LayoutRecordingProgressing && <LayoutRecordingProgressing setLayout={setLayout} />}
            {layout === LayoutOptions.LayoutRecordingTranscribe && <LayoutRecordingTranscribe setLayout={setLayout} />}
            {layout === LayoutOptions.LayoutRecordingFinished && <LayoutRecordingFinished setLayout={setLayout} />}
          </div>
          {layout === LayoutOptions.LayoutRecordingFinished && <TranscribeTextArea />}
        </div>
      </div>
    </main>
  )
}

export default Home
