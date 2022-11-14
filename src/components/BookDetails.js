import React from 'react'

const BookDetails = ({ book, loading, error }) => {
  if (error) return <p>Error: {error}</p>

  if (loading) return <p>Loading...</p>

  return (
    <div
      key={book.id}
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
        {book.description}
      </p>
    </div>
  )
}

export default BookDetails
