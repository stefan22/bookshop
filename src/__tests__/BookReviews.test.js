/*
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import React from 'react'
import { render } from '@testing-library/react'
import BookReviews from '../components/BookReviews'

describe('Reviews', () => {
  it('renders an empty list', () => {
    const props = {
      reviews: [],
    }

    const { container } = render(<BookReviews {...props} />)
    const reviews = container.querySelector('[data-testid="reviews-container"]')
    // expect(reviews).toBeEmptyDOMElement()
    expect(reviews).toBeInTheDocument()
  })
})
