import React from 'react'

const BookDetails = ({ book, loading, error }) => {
  if (error) return <p>Error: {error}</p>

  if (loading) return <p>Loading...</p>

  return (
    <div
      key={book.id}
      data-testid="book-details"
    >
      <h2 className="title">{book.name}</h2>
    </div>
  )
}

export default BookDetails
