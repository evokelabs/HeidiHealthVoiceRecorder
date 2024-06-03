import LayoutRecordingFinished from '@/Layout/LayoutRecordingFinished'
import { render, screen } from '@testing-library/react'

describe('LayoutRecordingFinished', () => {
  it('should render the main big button with the correct caption', () => {
    render(<LayoutRecordingFinished />)
    const text = screen.getByText('new recording')
    expect(text).toBeInTheDocument()
  })

  it('should render the transcribe text area with the correct class name', () => {
    render(<LayoutRecordingFinished />)
    const textArea = screen.getByTestId('transcribe-text-area')
    expect(textArea).toBeInTheDocument()
  })
})
