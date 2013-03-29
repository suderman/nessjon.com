# mongoose = require 'mongoose'
# mongoose.connect process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/test'
# db = mongoose.connection
# db.on 'error', console.error.bind(console, 'connection error:')
# db.once 'open', ->
# 
#   kittySchema = mongoose.Schema 
#     name: String,
#     date: type: Date, default: Date.now
# 
#   kittySchema.methods.speak = ->
#     greeting = "I don't have a name"
#     greeting = "Meow name is #{@name}" if @name
#     console.log(greeting)
# 
#   Kitten = mongoose.model 'Kitten', kittySchema
#   silence = new Kitten name: 'Silence'
# 
#   fluffy = new Kitten name: 'fluffy'
#   fluffy.save (err, fluffy) ->
#     fluffy.speak() unless (err)
# 
#   Kitten.find name: /^fluff/, (err, cats) ->
#     console.log(cats)
#
#
#     -----
#

  # rsvpSchema = new mongoose.Schema name: String, comments: String
  # Rsvp = db.model 'Rsvp', rsvpSchema

  # Rsvp.find 

# mongo = require 'mongodb'
# mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mydb' 
# 
# mongo.Db.connect mongoUri, (err, db) ->
#   db.collection 'mydocs', (er, collection) ->
#     collection.insert {'mykey': 'myvalue'}, {safe: true}, (er,rs) ->

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

  # app.use express.favicon()
  app.use express.logger('dev')
  app.use express.bodyParser()
  app.use express.methodOverride()
  # app.use express.cookieParser('your secret here')
  # app.use express.session()
  app.use app.router
  # app.use require("less-middleware")(src: __dirname + "/public")
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
  res.render "rsvp"

app.post '/rsvp.html', (req, res) ->
  console.log(req.body)

  mail = new sendgrid.Email
    to: 'suderman@gmail.com',
    from: 'mailer@nessjon.com',
    subject: 'RSVP received!',
    text: JSON.stringify(req.body)

  sender.send mail, (success, err) ->
    if success then console.log 'Email sent'
    else console.log err

  res.render "rsvp", form:'' 

# Start up the server!
app.listen app.get('port'), ->
  console.log "Express server listening on port #{app.get('port')}"
