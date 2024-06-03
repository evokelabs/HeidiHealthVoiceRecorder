import LayoutRecordingProgressing from '@/Layout/LayoutRecordingProgressing'
import { STOP_RECORDING, PAUSE_RECORDING } from '@/libs/constants'
import { render, screen } from '@testing-library/react'

describe('LayoutRecordingProgressing', () => {
  it('should render the stop button with the correct caption', () => {
    render(<LayoutRecordingProgressing />)
    const stopButton = screen.getByText(STOP_RECORDING)
    expect(stopButton).toBeInTheDocument()
  })

  it('should render the pause button when recording is not paused', () => {
    render(<LayoutRecordingProgressing />)
    const pauseButton = screen.getByText(PAUSE_RECORDING)
    expect(pauseButton).toBeInTheDocument()
  })

  it('should render the recording display', () => {
    render(<LayoutRecordingProgressing />)
    const recordingDisplay = screen.getByTestId('recording-display')
    expect(recordingDisplay).toBeInTheDocument()
  })
})
