import React from 'react'
import {
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    marginBottom: '1rem',
  },
}))

const Booklist = ({ books, loading, error }) => {
  const classes = useStyles()
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
      <Grid
        container
        spacing={2}
      >
        {books?.map(book => (
          <Grid
            item
            xs={6}
            md={8}
            key={book.id}
            data-testid="book-item"
            className="book-item"
          >
            <Card>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  {book.name}
                </Typography>

                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  href={`/books/${book.id}`}
                  component="a"
                >
                  View details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Booklist
