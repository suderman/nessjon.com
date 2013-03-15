express = require 'express'
http = require 'http'
path = require 'path'
ect = require('ect') watch: true, root: "#{__dirname}/views", ext: '.html'

app = express()

app.configure ->
  app.set "port", process.env.PORT or 3000
  app.engine '.html', ect.render
  app.use express.favicon()
  app.use express.logger("dev")
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use express.cookieParser("your secret here")
  app.use express.session()
  app.use app.router
  app.use require("less-middleware")(src: __dirname + "/public")
  app.use express.static(path.join(__dirname, "public"))

app.configure "development", -> app.use express.errorHandler()

# Routes
app.get '/', (req, res) -> res.render "index.html"
app.get '/new.html', (req, res) -> res.render "new.html"

http.createServer(app).listen app.get("port"), ->
  console.log "Express server listening on port " + app.get("port")
