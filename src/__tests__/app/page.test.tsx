import { render, screen } from '@testing-library/react'
import Home from '../../app/page'

describe('Home', () => {
  test('renders the main component', () => {
    render(<Home />)
    const mainElement = screen.getByRole('main')
    expect(mainElement).toBeInTheDocument()
  })

  test('renders the logos component', () => {
    render(<Home />)
    const logosElement = screen.getByTestId('logos')
    expect(logosElement).toBeInTheDocument()
  })
})
