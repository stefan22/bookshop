import React from 'react'

const Booklist = ({ books, loading, error }) => {
  if (error) return <p>Error: {error}</p>

  if (!loading && books.length === 0) {
    return <p>No books available at this time</p>
  }
  if (loading) return <p>Loading...</p>

  return (
    <div
      data-testid="book-list"
      className="home-wrapper"
    >
      <div className="container">
        {books?.map(book => (
          <div
            key={book.id}
            data-testid="book-item"
            className="book-item"
          >
            <section className="card">
              <div>
                <h2 className="title">{book.name}</h2>

                <p className="description">{book.intro}</p>

                <a href={`/books/${book.id}`}>View details</a>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Booklist
