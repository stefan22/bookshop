const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
const path = jsonServer.router(path.join(__dirname, 'db.json'))

server.use(jsonServer.bodyParser)

server.use((req, res, next) => {
  if (req.method === 'DELETE' && req.query._cleanup) {
    const { db } = router
    db.set('books', []).write()
    console.log('clear db ', db)
    res.sendStatus(204)
  } else {
    next()
  }
})

server.listen('8080', () => {
  console.log(`JSON Server is running`)
})
