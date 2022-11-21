import React from 'react'
import BookReviews from '../components/BookReviews'

const BookReviewsContainer = ({ reviews }) =>
  reviews?.length === 0
    ? 'Be the first person to review this book'
    : reviews?.map(itm => (
        <section
          key={itm.id}
          className="book-review__item"
        >
          <BookReviews {...itm} />
        </section>
      ))

export default BookReviewsContainer
