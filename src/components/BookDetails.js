import React from 'react'
import BookReviewsContainer from '../layout/BookReviewsContainer'

const BookDetails = ({ book, loading, error }) => {
  if (error) return <p>Error: {error}</p>

  if (loading) return <p>Loading...</p>

  return (
    <div
      key={book.id}
      className="book-details"
      data-testid="book-details"
    >
      <h2
        data-testid="book-name"
        className="title"
      >
        {book.name}
      </h2>
      <p
        data-testid="book-description"
        className="book-description"
      >
        {book.description ? book.description : book.name}
      </p>
      <br />
      <h2 className="book-reviews__heading">Book reviews</h2>
      <div className="book-reviews__container">
        {book.reviews && (
          <BookReviewsContainer reviews={book.reviews} />
        )}
      </div>
    </div>
  )
}

export default BookDetails
