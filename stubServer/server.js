const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use((req, res, next) => {
  // delete
  if (req.method === 'DELETE' && req.query._cleanup) {
    const { db } = router
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
  console.log(`jsnsrvr up & running`)
})
