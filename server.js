const http = require('http')
const next = require('next')
const nextRoutes = require('next-routes')

// Create Routes
const routes = nextRoutes()
routes.add('index', '/:search')
routes.add('index', '/')

// Create App
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

// Start Server
app.prepare().then(() => {
  http.createServer(handler).listen(3000)
})
