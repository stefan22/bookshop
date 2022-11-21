import React from 'react'

const SearchBox = ({ term, setTerm }) => (
  <div>
    <label htmlFor="search">Search by:<br />
      <input
        value={term}
        id="search"
        data-testid="search"
        onChange={e => setTerm(e.target.value)}
        type="text"
        placeholder="book name"
      />
    </label>
  </div>
)
export default SearchBox
