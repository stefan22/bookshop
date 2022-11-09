import { Typography } from '@material-ui/core'
import BooklistContainer from './layout/BooklistContainer'

function App() {
  return (
    <div className="App">
      <Typography
        variant="h2"
        component="h2"
        data-test="heading"
      >
        Bookshop
      </Typography>

      <BooklistContainer />
    </div>
  )
}

export default App
