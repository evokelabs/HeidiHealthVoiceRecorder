'use client'

import { useState } from 'react'

import { LayoutOptions } from '@/libs/types'

import { Logos } from '@/UI/Logos'
import { AudioContext } from '@/libs/AudioContext'
import { UIContext } from '@/libs/UIContext'
import useAudioRecording from '@/libs/useAudioRecording'
import { renderLayout, useLayoutState } from '@/libs/useLayoutState'

const Home = () => {
  const { layout, setLayout, resetLayout, layoutAnimateIn, layoutAnimateOut } = useLayoutState(LayoutOptions.LayoutRecordingInit)
  const [isPressed, setIsPressed] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const { startRecording, stopRecording, levels, microphoneError } = useAudioRecording({ isPaused, setIsPaused })

  return (
    <UIContext.Provider value={{ layout, setLayout, isPressed, setIsPressed, layoutAnimateOut, layoutAnimateIn }}>
      <AudioContext.Provider value={{ seconds, setSeconds, isPaused, setIsPaused, startRecording, stopRecording, levels, microphoneError }}>
        <main className="w-full h-full relative m-auto max-w-screen-2xl">
          <div
            className="flex justify-center mt-6 absolute w-full z-10 cursor-pointer"
            onClick={resetLayout}>
            <Logos />
          </div>
          <div className="h-full relative">
            <div className="flex flex-col h-full justify-center">{renderLayout(layout)}</div>
          </div>
        </main>
      </AudioContext.Provider>
    </UIContext.Provider>
  )
}

export default Home
