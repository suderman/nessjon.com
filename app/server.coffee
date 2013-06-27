mongoose = require 'mongoose'
mongoose.connect process.env.MONGOHQ_URL # || 'mongodb://localhost/test'
db = mongoose.connection
db.on 'error', console.error.bind(console, 'connection error:')

rsvpSchema = mongoose.Schema 
  response: type: String
  name:     type: String
  email:    type: String
  comments: type: String
  date:     type: Date, default: Date.now

rsvpSchema.methods.timestamp = ->
  date = new Date(@date)
  date.toLocaleDateString() + " at " + date.toLocaleTimeString()

rsvpSchema.methods.notify = ->

  mail = new sendgrid.Email
    to: 'suderman@gmail.com',
    from: 'mailer@nessjon.com',
    subject: 'RSVP received!',
    text: [
      "Response: #{@response}"
      "Name: #{@name}"
      "Email: #{@email}"
      "Comments: #{@comments}"
      "Date: #{@date}"
    ].join "\n\r"

  sender.send mail, (success, err) ->
    if success then console.log 'Email sent'
    else console.log err

Rsvp = mongoose.model 'Rsvp', rsvpSchema

sendgrid = require 'sendgrid'
sender = new sendgrid.SendGrid process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD

path = require 'path'
express = require 'express'
app = express()

# All environments
app.configure ->
  root = path.resolve(__dirname + '/..')
  app.config = require "#{root}/config.json"

  app.set 'port', process.env.PORT or 3000

  app.set 'views', __dirname + '/views'
  app.set 'view engine', 'toffee'

  app.use express.logger('dev')
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use app.router
  app.use express.static "#{root}/public"

  app.assets = {}
  app.assets.host = app.config.cdn or ""
  app.assets.styles = "#{app.assets.host}/styles"
  app.assets.scripts = "#{app.assets.host}/scripts"
  app.assets.images = "#{app.assets.host}/images"

# Dev environment
app.configure 'development', ->
  app.use express.errorHandler()

# Routes
app.get '/', (req, res) ->
  res.render "index", assets: app.assets

app.get '/splash.html', (req, res) ->
  res.render "splash", assets: app.assets

# app.get '/dinner(\.html)?', (req, res) -> res.redirect 'http://goo.gl/maps/b0zb6'
# app.get '/lunch(\.html)?', (req, res) -> res.redirect 'http://goo.gl/maps/oIIUk'

app.get '/dinner', (req, res) -> res.redirect '/dinner.html'
app.get '/dinner.html', (req, res) ->
  res.render "dinner", assets: app.assets

app.get '/lunch', (req, res) -> res.redirect '/lunch.html'
app.get '/lunch.html', (req, res) ->
  res.render "lunch", assets: app.assets

app.get '/rsvp', (req, res) -> res.redirect '/rsvp.html'
app.get '/rsvp.html', (req, res) ->
  Rsvp.find().where('response').equals('Yes').sort('-date').exec (err, yays)  ->
    Rsvp.find().where('response').equals('No').sort('-date').exec (err, nays)  ->
      res.render "rsvp", yays: yays, nays: nays, assets: app.assets

app.post '/rsvp.html', (req, res) ->

  rsvp = new Rsvp 
    response: req.body.response
    name:     req.body.name
    email:    req.body.email
    comments: req.body.comments

  rsvp.save (err, rsvp) ->
    rsvp.notify() unless (err)
    if req.body.response is "Yes"
      res.send "Thank you for RSVPing, #{rsvp.name}. We look forward to seeing you on our special day!"
    else
      res.send "So sorry you can't join us, #{rsvp.name}. We really appreciate you letting us know!"

app.get '/zoo', (req, res) -> res.redirect '/zoo.html'
app.get '/zoo.html', (req, res) ->
  res.render "zoo", assets: app.assets

# Start up the server!
app.listen app.get('port'), ->
  console.log "Express server listening on port #{app.get('port')}"
