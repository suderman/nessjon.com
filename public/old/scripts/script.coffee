###
                       (_)
    _ __   ___  ___ ___ _  ___  _ __    ___ ___  _ __ ___
   | '_ \ / _ \/ __/ __| |/ _ \| '_ \  / __/ _ \| '_ ` _ \
   | | | |  __/\__ \__ \ | (_) | | | || (_| (_) | | | | | |
   |_| |_|\___||___/___/ |\___/|_| |_(_)___\___/|_| |_| |_|
                      _/ |
                     |__/

  Compiled from:
  http://nessjon.com/scripts/script.coffee
                                                      ;-)###

# Depends on base.js (Modernizr, yepnope.js, html5shiv, ie)
# ----------------------------------------------------------

# CSS3 selector support & stylesheet reset
yepnope test: ie <= 8, yep: '/scripts/lib/nwmatcher-selectivizr.js'
yepnope test: ie <= 7, yep: '/styles/lib/ie6.1.1.css'

# Gentlemen, load your libraries:
yepnope load: [
  '/scripts/lib/jquery.min.js',       # obviously
  '/scripts/lib/underscore.min.js',   # tasty utility methods
  '/scripts/lib/fastclick.min.js',    # treat tap as click events
  '/scripts/lib/mousetrap.js',        # keyboard shortcuts
  '/scripts/lib/jquery.fitmaps.js',   # responsive Google Maps
], complete: -> jQuery app.init()

# Google Analytics
window._gaq = [["_setAccount", "UA-35747031-1"], ["_trackPageview"], ["_trackPageLoadTime"]]
yepnope load: '//www.google-analytics.com/ga.js'

# All site behavior right here folks!
window.app = {}

app.init = ->
  app.setup()
  app.secretSong()
  app.countdown()
  app.navigation()
  app.slideshow()
  app.map()

  $('html').addClass 'ready'

app.setup = ->

  # Treat clicks as taps on touch devices
  new FastClick document.body

  # Ruby-style string interpolation #{...}
  _.templateSettings = interpolate: /\#\{(.+?)\}/g

  # Turn http://, @usernames and #hashtags into links
  _.mixin
    linkify: (string) ->
      string = string.replace /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a target='_blank' href='$1'>$1</a>"
      string = string.replace /(^|\s)@(\w+)/g, "$1<a target='_blank' href='http://www.twitter.com/$2'>@$2</a>"
      string = string.replace /(^|\s)#(\w+)/g, "$1<a target='_blank' href='http://search.twitter.com/search?q=%23$2'>#$2</a>"

  # Cross-browser support for CSS transition callback
  app.transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend'


app.navigation = ->

  # Reveal side menu
  $('header[role=banner] a.menu').on 'click', (e)->

    # Don't allow real click event (hash in url)
    e.preventDefault()

    # Don't trigger the 'html.menu' click event
    e.stopPropagation()

    # Slide the side menu in
    $('html').toggleClass 'menu'


  # Hide the side menu
  $(document).on 'click', 'html.menu', (e)->

    # Check for clicking a link in the menu itself
    unless $(e.target).parents('nav[role=navigation]').length
      $('html').removeClass 'menu'


  # Open/close behaviour in side menu
  $('nav[role=navigation] > ul > li > a').on 'click', (e)->
    e.preventDefault()

    # On first click, expand the submenu
    $nav = $(this).next 'nav'
    if $nav.height() is 0
      $nav.closest('ul').find('> li > nav').height 0
      $nav.height $nav.find('ul:first').height()
      $nav.hide().show()

    # On second click, follow the link
    else 
      # location.href = this.href
      $('html').removeClass 'menu'
      href = $(this).attr('href')
      $('html, body').animate 
        scrollTop: $(href).offset().top
        , 500, -> window.location.hash = href

  # Swipe to/from menu
  $(document).on 'swipe', (e)-> 
    $('html').addClass 'menu' if e.direction is 'left'
    $('html').removeClass 'menu' if e.direction is 'right'

  # # Set navigation height to match html height (when in menu mode)
  # $(window).resize -> $('nav[role=navigation]').height $('html').height() * 1.3
  # $(window).resize()


app.countdown = ->
  $('.countdown').each ->
    $countdown = $(this)
    date = $countdown.attr("rel").split(" ")[0]
    time = $countdown.attr("rel").split(" ")[1]
    year = parseInt(date.split("-")[0], 10)
    month = parseInt(date.split("-")[1], 10) - 1
    day = parseInt(date.split("-")[2], 10)
    hour = parseInt(time.split(":")[0], 10)
    minute = parseInt(time.split(":")[1], 10)
    futureTime = Date.UTC year, month, day, hour, minute, 0

    app.updateCountdown $countdown, futureTime
    setInterval ->
      app.updateCountdown $countdown, futureTime
    , 5000


app.updateCountdown = ($countdown, futureTime) ->
  d = new Date()
  currentTime = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds())
  daysFloat = (futureTime - currentTime) / 86400000
  days = parseInt(daysFloat, 10)
  days = 0 if days < 0
  hoursFloat = (daysFloat - days) * 24
  hours = parseInt(hoursFloat, 10)
  hours = 0 if hours < 0
  minutesFloat = (hoursFloat - hours) * 60
  minutes = parseInt(minutesFloat, 10)
  minutes = 0 if minutes < 0
  $countdown.find("dd:nth-of-type(1) figure").text days
  $countdown.find("dd:nth-of-type(2) figure").text hours
  $countdown.find("dd:nth-of-type(3) figure").text minutes


# We're going to the zoo, zoo, zoo!
app.secretSong = ->
  app.foundSecretSong = false

  app.mp3 = $('audio:first').get(0)
  app.mp3.load()

  $(document).keydown -> 
    if app.foundSecretSong
      if app.mp3.paused
        app.mp3.play()
      else
        app.mp3.pause()

  Mousetrap.bind "z o o", ->
    app.foundSecretSong = true
    app.mp3.play()
    # $("body").append "<embed src=files/secret.mp3 autostart=true loop=false width=2 height=0>"

app.map = ->
  $('figure.map').each -> 
    height = $(this).closest('section').find('.col:first').height()
    $(this).fitMaps w: '100%', h: (height - 100) + 'px'

app.slideshow = ->

  $('div.hero').each ->
    $hero = $(this)
    $hero.find('li:first').css opacity: 1

    app.slideshow.advance = =>
      $prev = $hero.find 'li:first'
      $curr = $prev.next 'li'
      $curr.animate opacity: 1, 1500
      $prev.animate opacity: 0, 1500, ->
        $prev.off().detach().appendTo $curr.parent()

    id = setInterval app.slideshow.advance, 7000
    $('header[role=banner] h1 a').on 'click', (e) -> 
      e.preventDefault()
      app.slideshow.advance()
