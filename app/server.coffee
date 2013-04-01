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
  app.set 'port', process.env.PORT or 3000

  app.set 'views', __dirname + '/views'
  app.set 'view engine', 'toffee'

  app.use express.logger('dev')
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use app.router
  app.use express.static path.resolve(__dirname + '/../public')

# Dev environment
app.configure 'development', ->
  app.use express.errorHandler()

# Routes
app.get '/', (req, res) ->
  res.render "index", title: 'Janessa Sheppard & Jonathan Suderman - July 6, 2013'

app.get '/new.html', (req, res) ->
  res.render "new"

app.get '/rsvp.html', (req, res) ->
  Rsvp.find().where('response').equals('Yes').sort('-date').exec (err, yays)  ->
    Rsvp.find().where('response').equals('No').sort('-date').exec (err, nays)  ->
      res.render "rsvp", yays: yays, nays: nays

app.post '/rsvp.html', (req, res) ->
  # if req.body.response? and req.body.name?

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

# Start up the server!
app.listen app.get('port'), ->
  console.log "Express server listening on port #{app.get('port')}"
