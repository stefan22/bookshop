import React from 'react'
import BookReviews from '../components/BookReviews'

const BookReviewsContainer = ({ reviews }) =>
  reviews?.map(itm => (
    <section
      key={itm.id}
      className="book-review__item"
    >
      <BookReviews {...itm} />
    </section>
  ))

export default BookReviewsContainer
