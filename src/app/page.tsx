'use client'
import { Logos } from '@/UI/Logos'
import LayoutRecordingFinished from '@/Layout/LayoutRecordingFinished'
import LayoutRecordingInit from '@/Layout/LayoutRecordingInit'
import LayoutRecordingTranscribe from '@/Layout/LayoutRecordingTranscribe'
import LayoutRecordingProgressing from '@/Layout/LayoutRecordingProgressing'

export default function Home() {
  return (
    <main className="w-full h-full relative">
      <div className="flex justify-center mt-6 absolute w-full">
        <Logos />
      </div>
      <div className="h-full relative">
        <div className="flex flex-col h-full justify-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
            <LayoutRecordingInit />
            {/* <LayoutRecordingProgressing /> */}
            {/* <LayoutRecordingTranscribe /> */}
          </div>
          {/* <LayoutRecordingFinished /> */}
        </div>
      </div>
    </main>
  )
}
