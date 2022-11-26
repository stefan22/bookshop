const jsonServer = require('json-server')

const server = jsonServer.create()
// db router
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()

server.use((req, res, next) => {
  // resets books to an empty array
  if (req.method === 'DELETE' && req.query._cleanup) {
    const { db } = router
    db.set('books', []).write()
    res.sendStatus(204) // no content success
  } else {
    next()
  }
})

server.use(jsonServer.rewriter({}))

server.use(middlewares)
server.use(router)

server.listen('8080', () => {
  console.log(`server running`)
})
