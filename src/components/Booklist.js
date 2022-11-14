import React from 'react'

const Booklist = ({ books, loading, error }) => {
  if (error) return <p>Error: {error}</p>

  if (!loading && books.length === 0) {
    return <p>No books available at this time</p>
  }
  if (loading) return <p>Loading...</p>

  return (
    <div data-testid="book-list">
      {books?.map(book => (
        <div
          key={book.id}
          data-testid="book-item"
          className="book-item"
        >
          <h2 className="title">{book.name}</h2>
          <a href={`/books/${book.id}`}>View details</a>
        </div>
      ))}
    </div>
  )
}

export default Booklist
