import React from 'react'
import { render } from '@testing-library/react'
import Booklist from '../components/Booklist.jsx'

describe('Booklist', () => {
  it('loading state', () => {
    const props = {
      loading: true,
    }
    const { container } = render(<Booklist {...props} />)
    const content = container.querySelector('p')
    expect(content.innerHTML).toContain('Loading...')
  })
})
