/*
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBox from '../components/SearchBox'

describe('Searchbox', () => {
  it('renders input', () => {
    const props = {
      term: '',
      setTerm: jest.fn(),
    }
    const { container } = render(<SearchBox {...props} />)
    const input = container.querySelector('[data-testid="search"]')
    userEvent.type(input, 'wars')
    expect(props.setTerm).toHaveBeenCalled()
    expect(props.setTerm).toBeCalledTimes(4)
  })
})
