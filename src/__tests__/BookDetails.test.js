/*
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import BookDetails from '../components/BookDetails'

describe('Book details pg', () => {
  it('shows the correct book name', () => {
    const props = {
      book: {
        name: 'The Streaming Wars',
      },
    }
    const { container } = render(<BookDetails {...props} />)
    const title = container.querySelector('[data-testid="book-name"]')
    expect(title.innerHTML).toEqual(props.book.name)
  })

  it('shows the correct book description', () => {
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

  it('renders book name when no description available', () => {
    const nodesc = {
      book: {
        name: 'The Streaming Wars',
      },
    }
    const { container } = render(<BookDetails {...nodesc} />)
    const description = container.querySelector(
      '[data-testid="book-description"]'
    )
    expect(description.textContent).toEqual(nodesc.book.name)
  })
})
