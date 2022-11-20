/*
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import React from 'react'
import { render } from '@testing-library/react'
import BookReviews from '../components/BookReviews'
import BookDetails from '../components/BookDetails'

describe('Reviews', () => {
  it('renders an empty list', () => {
    const props = {
      reviews: [],
    }
    const { container } = render(<BookReviews {...props} />)
    const reviews = container.querySelector(
      '[data-testid="reviews-container"]'
    )
    expect(reviews).toBeInTheDocument()
  })

  it('renders a review', () => {
    const props = {
      reviews: [
        {
          name: 'Mike',
          date: '2022/07/22',
          content: 'It was alright',
        },
      ],
    }

    const { container } = render(<BookReviews {...props} />)
    const reviews = container.querySelectorAll(
      '[data-testid="reviews-item"] p'
    )
    expect(reviews.length).toBe(2)
  })

  it('renders a book review within book details', () => {
    const props = {
      book: {
        name: 'The Streaming Wars',
        description:
          "Cartman locks horns with his mum in a battle of wills while an epic conflict unfolds and threatens South Park's very existence.",
        intro: 'Cartman locks horns with ...',
        author: 'Eric Cartman',
        id: 1,
      },
      reviews: [
        {
          name: 'Mike',
          date: '2022/07/22',
          content: 'It was alright',
        },
      ],
    }

    const { container } = render(<BookDetails {...props} />)
    const reviews = container.querySelectorAll(
      '[data-testid="reviews-item"] p'
    )
    expect(reviews.length).toBe(1)
  })
})
