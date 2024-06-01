'use client'

import { useState } from 'react'

import { LayoutOptions } from '@/libs/types'

import { Logos } from '@/UI/Logos'
import TranscribeTextArea from '@/UI/TranscribeTextArea'
import { AudioContext } from '@/libs/AudioContext'
import { UIContext } from '@/libs/UIContext'
import useAudioRecording from '@/libs/useAudioRecording'
import useLayoutState, { renderLayout } from '@/libs/useLayoutState'

const Home = () => {
  const { layout, setLayout, resetLayout } = useLayoutState(LayoutOptions.LayoutRecordingInit)
  const [isPressed, setIsPressed] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const { startRecording, stopRecording, levels } = useAudioRecording({ isPaused, setIsPaused })

  return (
    <UIContext.Provider value={{ layout, setLayout, isPressed, setIsPressed }}>
      <AudioContext.Provider value={{ seconds, setSeconds, isPaused, setIsPaused, startRecording, stopRecording, levels }}>
        <main className="w-full h-full relative m-auto max-w-screen-2xl">
          <div
            className="flex justify-center mt-6 absolute w-full z-10 cursor-pointer"
            onClick={resetLayout}>
            <Logos />
          </div>
          <div className="h-full relative">
            <div className="flex flex-col h-full justify-center">
              {renderLayout(layout)}
              {layout === LayoutOptions.LayoutRecordingFinished && <TranscribeTextArea />}
            </div>
          </div>
        </main>
      </AudioContext.Provider>
    </UIContext.Provider>
  )
}

export default Home
