import { SpeechToTextContext } from '@/libs/SpeechToTextContext'
import { useContext } from 'react'

const TranscribeTextArea = () => {
  const { transcript } = useContext(SpeechToTextContext)
  
  return (
    <div className="rounded-2xl p-4 relative bg-white border-primary border-2 mx-10 h-full">
      <p className="text-left font-semibold text-lg ">
        {transcript.split(' ').map((word, index) => (
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
