#!
# * jQuery Countdown plugin v1.0
# * http://www.littlewebthings.com/projects/countdown/
(($) ->
  $.fn.countDown = (options) ->
    $this = $(this)
    config = {}
    $.extend config, options
    diffSecs = @setCountDown(config)
    $this.data "callback", config.onComplete  if config.onComplete
    $this.data "omitWeeks", config.omitWeeks  if config.omitWeeks
    $this.find("div").html "<span></span><span></span>"
    $this.doCountDown diffSecs, 500
    this

  $.fn.stopCountDown = ->
    clearTimeout $(this).data("timer")

  $.fn.startCountDown = ->
    @doCountDown $(this).data("diffSecs"), 500

  $.fn.setCountDown = (options) ->
    targetTime = new Date()

    if options.targetDate
      targetTime = new Date(options.targetDate.month + "/" + options.targetDate.day + "/" + options.targetDate.year + " " + options.targetDate.hour + ":" + options.targetDate.min + ":" + options.targetDate.sec + ((if options.targetDate.utc then " UTC" else "")))

    else if options.targetOffset
      targetTime.setFullYear options.targetOffset.year + targetTime.getFullYear()
      targetTime.setMonth options.targetOffset.month + targetTime.getMonth()
      targetTime.setDate options.targetOffset.day + targetTime.getDate()
      targetTime.setHours options.targetOffset.hour + targetTime.getHours()
      targetTime.setMinutes options.targetOffset.min + targetTime.getMinutes()
      targetTime.setSeconds options.targetOffset.sec + targetTime.getSeconds()

    nowTime = new Date()
    diffSecs = Math.floor((targetTime.valueOf() - nowTime.valueOf()) / 1000)
    $(this).data "diffSecs", diffSecs
    diffSecs

  $.fn.doCountDown = (diffSecs, duration) ->
    $this = $(this)

    if diffSecs <= 0
      diffSecs = 0
      clearTimeout $this.data("timer") if $this.data("timer")

    secs = diffSecs % 60
    mins = Math.floor(diffSecs / 60) % 60
    hours = Math.floor(diffSecs / 60 / 60) % 24

    if $this.data("omitWeeks") is true
      days = Math.floor(diffSecs / 60 / 60 / 24)
      weeks = Math.floor(diffSecs / 60 / 60 / 24 / 7)

    else
      days = Math.floor(diffSecs / 60 / 60 / 24) % 7
      weeks = Math.floor(diffSecs / 60 / 60 / 24 / 7)

    $this.dashChangeTo "seconds", secs, (if duration then duration else 800)
    $this.dashChangeTo "minutes", mins, (if duration then duration else 1200)
    $this.dashChangeTo "hours", hours, (if duration then duration else 1200)
    $this.dashChangeTo "days", days, (if duration then duration else 1200)
    $this.dashChangeTo "weeks", weeks, (if duration then duration else 1200)

    $this.data "diffSecs", diffSecs
    if diffSecs > 0
      t = setTimeout(->
        $this.doCountDown diffSecs - 1
      , 1000)
      $this.data "timer", t

    else $this.data("callback")() if cb = $this.data("callback")

  $.fn.dashChangeTo = (dash, n, duration) ->
    $this = $(this)
    i = ($this.find("figure." + dash + " div").length - 1)

    while i >= 0
      d = n % 10
      n = (n - d) / 10
      $this.digitChangeTo $this.find("." + dash + " div:eq(" + i + ")"), d, duration
      i--

  $.fn.digitChangeTo = ($digit, n, duration) ->
    duration = 800 unless duration
    unless $digit.find("span:first").html() is n + ""
      $digit.find("span:first").hide()
                               .html(((if n then n else "0")))
                               .slideDown duration
      $digit.find("span:last").animate height: '', duration, ->
        $digit.find("span:last").html($digit.find("span:first").html())
                                .show()
                                .css height: ""
        $digit.find("span:first").hide()
                                 .slideUp 10

) jQuery
