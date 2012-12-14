# Gentlemen, load your libraries.
Modernizr.load load: [
  'scripts/lib/jquery.min.js',
  'scripts/lib/underscore.min.js',
  'scripts/lib/mousetrap.js',
], complete: -> jQuery app.init()

# Google Analytics
window._gaq = [["_setAccount", "UA-35747031-1"], ["_trackPageview"], ["_trackPageLoadTime"]]
Modernizr.load load: ((if "https:" is location.protocol then "//ssl" else "//www")) + ".google-analytics.com/ga.js"

# All site behavior right here folks!
window.app = {}

app.init = ->
  app.setup()
  app.doSomething(true)
  app.secretSong()

app.setup = ->

  # Ruby-style string interpolation #{...}
  _.templateSettings = interpolate: /\#\{(.+?)\}/g

  # Turn http://, @usernames and #hashtags into links
  _.mixin
    linkify: (string) ->
      string = string.replace /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a target='_blank' href='$1'>$1</a>"
      string = string.replace /(^|\s)@(\w+)/g, "$1<a target='_blank' href='http://www.twitter.com/$2'>@$2</a>"
      string = string.replace /(^|\s)#(\w+)/g, "$1<a target='_blank' href='http://search.twitter.com/search?q=%23$2'>#$2</a>"

  # Classify iPhones
  if navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)
    (jQuery 'html').addClass 'iphone'

app.doSomething = (arg)->

# We're going to the zoo, zoo, zoo!
app.secretSong = ->
  Mousetrap.bind "z o o", ->
    $("body").append "<embed src=files/secret.mp3 autostart=true loop=false width=2 height=0>"
