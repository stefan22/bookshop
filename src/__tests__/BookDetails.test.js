/*
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
import React from 'react'
import { render } from '@testing-library/react'
import BookDetails from '../components/BookDetails'

describe('Test environment', () => {
  test('use jsdom and set the URL in this test file', () => {
    expect(window.location.href).toBe('https://jestjs.io/')
  })
})

describe('Book details', () => {
  it('displays book name', () => {
    const props = {
      book: {
        name: 'The Streaming Wars',
      },
    }
    const { container } = render(<BookDetails {...props} />)
    const title = container.querySelector('[data-testid="book-name"]')
    expect(title.innerHTML).toEqual(props.book.name)
  })

  it('renders book description', () => {
    const props = {
      book: {
        name: 'The Streaming Wars',
        description: `Cartman locks horns with his mum in a battle of wills while an epic
          conflict unfolds and threatens South Park's very existence.
        `,
      },
    }
    const { container } = render(<BookDetails {...props} />)
    const description = container.querySelector(
      '[data-testid="book-description"]'
    )
    expect(description.innerHTML).toEqual(props.book.description)
  })
})
