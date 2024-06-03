'use client'
import { useState } from 'react'

import { Logos } from '@/UI/Logos'
import { AudioContext } from '@/libs/context/AudioContext'
import { UIContext } from '@/libs/context/UIContext'
import { SpeechToTextContext } from '@/libs/context/SpeechToTextContext'

import useAudioRecording from '@/libs/hooks/useAudioRecording'
import { LayoutOptions, renderLayout, useLayoutState } from '@/libs/hooks/useLayoutState'
import useSpeechToText from '@/libs/hooks/useSpeechToText'

const Home = () => {
  // Layout Context states
  const { layout, setLayout, resetLayout, layoutAnimateIn, layoutAnimateOut } = useLayoutState(LayoutOptions.LayoutRecordingInit)
  // Audio Context states
  const [isPaused, setIsPaused] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const { startRecording, stopRecording, levels, microphoneError } = useAudioRecording({ isPaused, setIsPaused })
  // Speech to Text Context states
  const { transcript, startSpeechRecognition, stopSpeechRecognition, resetSpeechRecognition, browserSupportsSpeechRecognition } =
    useSpeechToText()
  // UI Context states
  const [isPressed, setIsPressed] = useState(false)

  return (
    <UIContext.Provider value={{ layout, setLayout, isPressed, setIsPressed, layoutAnimateOut, layoutAnimateIn }}>
      <AudioContext.Provider value={{ seconds, setSeconds, isPaused, setIsPaused, startRecording, stopRecording, levels, microphoneError }}>
        <SpeechToTextContext.Provider
          value={{ transcript, startSpeechRecognition, stopSpeechRecognition, resetSpeechRecognition, browserSupportsSpeechRecognition }}>
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
        </SpeechToTextContext.Provider>
      </AudioContext.Provider>
    </UIContext.Provider>
  )
}

export default Home
