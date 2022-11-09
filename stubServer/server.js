const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const path = jsonServer.router(path.join(__dirname, 'db.json'))

server.use(jsonServer.bodyParser)

server.use((req, res, next) => {
  // delete w/_cleanup query resets arr length zero.
  if (req.method === 'DELETE' && req.query._cleanup) {
    const { db } = router
    // clear db
    db.set('books', []).write()
    // rq success w/nothing
    res.sendStatus(204)
  } else {
    next()
  }
})

server.use(middlewares)
server.use(router)

server.listen('8080', () => {
  console.log(`json-server is up & running`)
})
