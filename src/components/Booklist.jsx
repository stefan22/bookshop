import React from 'react'

const Booklist = ({ books, loading, error }) => {
  if (error) return <p>{error}</p>

  return (
    <div data-test="book-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        books?.map(book => (
          <div
            key={book.id}
            className="book-item"
          >
            <h2 className="title">{book.name}</h2>
          </div>
        ))
      )}
    </div>
  )
}

export default Booklist
