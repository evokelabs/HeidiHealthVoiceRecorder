import { render, fireEvent, screen } from '@testing-library/react'
import LayoutRecordingTranscribe from '@/Layout/LayoutRecordingTranscribe'
import { NEW_RECORDING, TRANSCRIBE_AUDIO } from '@/libs/constants'

describe('LayoutRecordingTranscribe', () => {
  it('renders without crashing', () => {
    render(<LayoutRecordingTranscribe />)
    expect(screen.getByText(NEW_RECORDING)).toBeInTheDocument()
    expect(screen.getByText(TRANSCRIBE_AUDIO)).toBeInTheDocument()
  })

  it('triggers a new recording when new recording button is clicked', () => {
    render(<LayoutRecordingTranscribe />)
    fireEvent.click(screen.getByText(NEW_RECORDING))

    // Check for changes in the DOM that indicate a new recording has started
    // This will depend on your implementation
  })

  it('transcribes audio when transcribe audio button is clicked', () => {
    render(<LayoutRecordingTranscribe />)
    fireEvent.click(screen.getByText(TRANSCRIBE_AUDIO))

    // Check for changes in the DOM that indicate audio is being transcribed
    // This will depend on your implementation
  })
})
