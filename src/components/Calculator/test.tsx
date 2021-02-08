import { render, screen } from '@testing-library/react'

import Calculator from '.'

describe('<Calculator />', () => {
  it('should render the heading', () => {
    const { container } = render(<Calculator />)

    expect(screen.getByRole('heading', { name: /Calculator/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
