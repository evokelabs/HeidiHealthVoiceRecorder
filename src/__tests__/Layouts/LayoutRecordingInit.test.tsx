import { render, fireEvent, screen } from '@testing-library/react'
import { UIContext, UIContextType } from '@/libs/context/UIContext'
import LayoutRecordingInit from '@/Layout/LayoutRecordingInit'
import { LayoutOptions } from '@/libs/hooks/useLayoutState'

describe('LayoutRecordingInit', () => {
  const setLayoutMock = jest.fn()
  const setIsPressedMock = jest.fn()

  const uiContextMock: UIContextType = {
    layout: LayoutOptions.LayoutRecordingInit,
    isPressed: false,
    setLayout: setLayoutMock,
    setIsPressed: setIsPressedMock,
    layoutAnimateIn: false,
    layoutAnimateOut: false,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(
      <UIContext.Provider value={uiContextMock}>
        <LayoutRecordingInit />
      </UIContext.Provider>
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders MainBigButton with correct props', () => {
    render(
      <UIContext.Provider value={uiContextMock}>
        <LayoutRecordingInit />
      </UIContext.Provider>
    )
    expect(screen.getByText('start recording')).toBeInTheDocument()
  })

  it('calls setLayout and setIsPressed with correct args when div is clicked', () => {
    render(
      <UIContext.Provider value={uiContextMock}>
        <LayoutRecordingInit />
      </UIContext.Provider>
    )
    fireEvent.click(screen.getByRole('button'))
    expect(setLayoutMock).toHaveBeenCalledWith(LayoutOptions.LayoutRecordingProgressing)
    expect(setIsPressedMock).toHaveBeenCalledWith(true)
  })
})
