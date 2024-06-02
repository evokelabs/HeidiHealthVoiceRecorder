import { SpeechToTextContext } from '@/libs/SpeechToTextContext'
import { useContext } from 'react'

const TranscribeTextArea = () => {
  const { transcript } = useContext(SpeechToTextContext)
  return (
    <div className="rounded-2xl p-4 relative bg-white border-primary border-2 mx-10 h-full">
      <p className="text-left font-semibold text-lg">{transcript}</p>
    </div>
  )
}
export default TranscribeTextArea
