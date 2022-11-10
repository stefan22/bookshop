const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use((req, res, next) => {
  // delete w/_cleanup query resets arr length zero.
  console.log('req is ', req)
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
