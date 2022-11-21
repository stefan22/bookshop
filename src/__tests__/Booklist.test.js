/*
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
import React from 'react'
import { render } from '@testing-library/react'
import Booklist from '../components/Booklist'

describe('Test environment', () => {
  test('use jsdom and set the URL in this test file', () => {
    expect(window.location.href).toBe('https://jestjs.io/')
  })
})

describe('Loading state', () => {
  it('renders "loading..." in pg when loading state true', () => {
    const props = {
      loading: true,
    }
    const { container } = render(<Booklist {...props} />)
    const content = container.querySelector('p')
    expect(content.innerHTML).toContain('Loading...')
  })
  it('throws network "Error" when error equals to true', () => {
    const props = {
      error: true,
    }
    const { container } = render(<Booklist {...props} />)
    const content = container.querySelector('p')
    expect(content.innerHTML).toContain('Error')
  })
})

describe('Renders books', () => {
  it('renders a book array correctly', () => {
    const props = {
      books: [
        { name: 'Homer', id: 1 },
        { name: 'Kenny', id: 2 },
        { name: 'Lisa', id: 3 },
        { name: 'Stan', id: 4 },
      ],
    }
    const { container } = render(<Booklist {...props} />)
    const titles = [...container.querySelectorAll('h2')].map(
      bk => bk.innerHTML
    )
    expect(titles.length).toBe(4)
    expect(titles[0]).toEqual('Homer')
    expect(titles[2]).toEqual('Lisa')
  })
})
