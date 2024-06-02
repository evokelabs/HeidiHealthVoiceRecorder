import { SpeechToTextContext } from '@/libs/context/SpeechToTextContext'
import { NO_TRANSCRIBE } from '@/libs/constants'
import { useContext } from 'react'

const TranscribeTextArea = () => {
  const { transcript } = useContext(SpeechToTextContext)
  const textToDisplay = transcript || NO_TRANSCRIBE

  return (
    <div className="rounded-2xl p-4 relative bg-white border-primary border-2 mx-10 h-full">
      <p className="text-left font-semibold text-base md:text-lg ">
        {textToDisplay.split(' ').map((word, index) => (
          <span
            key={index}
            className="word"
            style={{ animationDelay: `${index * 0.1}s` }}>
            {word}{' '}
          </span>
        ))}
      </p>
    </div>
  )
}
export default TranscribeTextArea
