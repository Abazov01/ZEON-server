const data = require('./data/db.json')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(data)
const midlwares = jsonServer.defaults()
const PORT  = process.env.PORT || 5000


server
    .use(midlwares)
    .use(router)

server.listen(PORT)
