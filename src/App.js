import { Typography } from '@material-ui/core'
import Booklist from './components/Booklist'

function App() {
  const books = [{ name: 'Homer' }, { name: 'South Park' }]
  return (
    <div className="App">
      <Typography
        variant="h2"
        component="h2"
        data-test="heading"
      >
        Bookshop
      </Typography>

      <Booklist books={books} />
    </div>
  )
}

export default App
