'use client'

import { useCallback, useState } from 'react'

import { LayoutOptions } from '@/libs/types'

import { Logos } from '@/UI/Logos'
import LayoutRecordingFinished from '@/Layout/LayoutRecordingFinished'
import LayoutRecordingInit from '@/Layout/LayoutRecordingInit'
import LayoutRecordingTranscribe from '@/Layout/LayoutRecordingTranscribe'
import LayoutRecordingProgressing from '@/Layout/LayoutRecordingProgressing'
import TranscribeTextArea from '@/UI/TranscribeTextArea'
import { AudioContext } from '@/libs/AudioContext'
import { UIContext } from '@/libs/UIContext'

const Home = () => {
  const [layout, setLayout] = useState(LayoutOptions.LayoutRecordingInit)
  const [isPressed, setIsPressed] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [seconds, setSeconds] = useState(0)

  const resetLayout = useCallback(() => {
    setLayout(LayoutOptions.LayoutRecordingInit)
  }, [])

  const renderLayout = () => {
    switch (layout) {
      case LayoutOptions.LayoutRecordingInit:
        return <LayoutRecordingInit />
      case LayoutOptions.LayoutRecordingProgressing:
        return <LayoutRecordingProgressing />
      case LayoutOptions.LayoutRecordingTranscribe:
        return <LayoutRecordingTranscribe />
      case LayoutOptions.LayoutRecordingFinished:
        return <LayoutRecordingFinished />
      default:
        return null
    }
  }

  return (
    <UIContext.Provider value={{ layout, setLayout, isPressed, setIsPressed }}>
      <AudioContext.Provider value={{ seconds, setSeconds, isPaused, setIsPaused }}>
        <main className="w-full h-full relative">
          <div
            className="flex justify-center mt-6 absolute w-full z-10 cursor-pointer"
            onClick={resetLayout}>
            <Logos />
          </div>
          <div className="h-full relative">
            <div className="flex flex-col h-full justify-center">
              <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">{renderLayout()}</div>
              {layout === LayoutOptions.LayoutRecordingFinished && <TranscribeTextArea />}
            </div>
          </div>
        </main>
      </AudioContext.Provider>
    </UIContext.Provider>
  )
}

export default Home
