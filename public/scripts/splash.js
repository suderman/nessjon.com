/*!
nessjon.com (2013-04-03)
Janessa and Jonathan's Wedding Website

*/(function(){Modernizr.load({load:["scripts/lib/jquery.min.js","scripts/lib/underscore.min.js","scripts/lib/mousetrap.js"],complete:function(){return jQuery(app.init())}}),window._gaq=[["_setAccount","UA-35747031-1"],["_trackPageview"],["_trackPageLoadTime"]],Modernizr.load({load:("https:"===location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js"}),window.app={},app.init=function(){return app.setup(),app.doSomething(!0),app.secretSong()},app.setup=function(){return _.templateSettings={interpolate:/\#\{(.+?)\}/g},_.mixin({linkify:function(e){return e=e.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,"<a target='_blank' href='$1'>$1</a>"),e=e.replace(/(^|\s)@(\w+)/g,"$1<a target='_blank' href='http://www.twitter.com/$2'>@$2</a>"),e=e.replace(/(^|\s)#(\w+)/g,"$1<a target='_blank' href='http://search.twitter.com/search?q=%23$2'>#$2</a>")}}),navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)?jQuery("html").addClass("iphone"):void 0},app.doSomething=function(){},app.secretSong=function(){return Mousetrap.bind("z o o",function(){return $("body").append("<embed src=files/secret.mp3 autostart=true loop=false width=2 height=0>")})}}).call(this);