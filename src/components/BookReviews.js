import React from 'react'

const BookReviews = ({ id, name, date, content }) => (
  <div
    key={id}
    data-testid="review-item"
  >
    <h3>{content}</h3>
    <div className="reviews__footer">
      <span>Posted by: {name}</span>
      &nbsp; | &nbsp;
      <span> Date: {date}</span>
    </div>
  </div>
)

export default BookReviews
