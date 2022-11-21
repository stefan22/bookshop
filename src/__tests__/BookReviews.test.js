/*
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
import React from 'react'
import { render } from '@testing-library/react'
import BookReviewsContainer from '../layout/BookReviewsContainer'
import BookDetails from '../components/BookDetails'

describe('Reviews', () => {
  it('renders no reviews, and "Be the first to review...." message', () => {
    const props = {
      reviews: [],
    }
    const { container } = render(<BookReviewsContainer {...props} />)
    const reviews = container.querySelectorAll(
      '[data-testid="review-item"]'
    )
    const message = 'Be the first person to review this book'
    expect(container).toBeInTheDocument()
    expect(reviews.length).toBe(0)
    expect(container).toHaveTextContent(message)
  })

  it('renders a review', () => {
    const props = {
      reviews: [
        {
          name: 'Mike',
          date: '2022/07/22',
          content: 'It was alright',
          id: 'e0722wars',
        },
      ],
    }
    const { container } = render(
      <BookReviewsContainer
        key={props.reviews.id}
        {...props}
      />
    )
    const reviews = container.querySelectorAll(
      '[data-testid="review-item"]'
    )
    expect(reviews.length).toBe(1)
  })

  it('renders heading of "Book reviews" below book details', () => {
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
    const heading = container.querySelector(
      'h2.book-reviews__heading'
    ).innerHTML
    expect(heading).toContain('Book reviews')
  })

  it('renders reviewer props (review and poster) in details page', () => {
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
          id: 'e0722alright',
        },
      ],
    }
    const { container } = render(
      <BookReviewsContainer
        key={props.reviews[0].id}
        {...props}
      />
    )
    const reviewContentTitle = container.querySelector('h3').innerHTML
    const reviewAuthor = container.querySelector(
      '[data-testid="review-item"] span'
    ).innerHTML

    expect(reviewContentTitle).toEqual(props.reviews[0].content)
    expect(reviewAuthor).toContain(props.reviews[0].name)
  })
})
