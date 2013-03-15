express = require 'express'
app = express()

# All environments
app.configure ->
  app.set 'port', process.env.PORT or 3000

  app.set 'views', __dirname + '/views'
  app.set 'view engine', 'toffee'

  app.use express.favicon()
  app.use express.logger('dev')
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use express.cookieParser('your secret here')
  app.use express.session()
  app.use app.router
  app.use require("less-middleware")(src: __dirname + "/public")
  app.use express.static(__dirname + '/public')

# Dev environment
app.configure 'development', ->
  app.use express.errorHandler()

# Routes
app.get '/', (req, res) ->
  res.render "index", title: 'Janessa Sheppard & Jonathan Suderman - July 6, 2013'
app.get '/new.html', (req, res) ->
  res.render "new"

# Start up the server!
app.listen app.get('port'), ->
  console.log "Express server listening on port #{app.get('port')}"
