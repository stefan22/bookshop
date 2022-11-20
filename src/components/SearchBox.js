import React from 'react'
import { Container, TextField } from '@material-ui/core'

const SearchBox = ({ term, setTerm }) => (
  <Container maxWidth="sm">
    <TextField
      label="Search"
      value={term}
      data-testid="search"
      onChange={e => setTerm(e.target.value)}
      margin="normal"
      variant="outlined"
      type="text"
      size="medium"
      placeholder="Search"
    />
  </Container>
)
export default SearchBox
