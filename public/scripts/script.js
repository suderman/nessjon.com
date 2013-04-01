/*!
nessjon.com (2013-03-29)
Janessa and Jonathan's Wedding Website

*/window.Modernizr=function(e,t,n){function r(e){h.cssText=e}function i(e,t){return typeof e===t}var o,a,s,l="2.6.2",c={},u=!0,f=t.documentElement,p="modernizr",d=t.createElement(p),h=d.style,m=({}.toString,{svg:"http://www.w3.org/2000/svg"}),g={},y=[],v=y.slice,b={}.hasOwnProperty;s=i(b,"undefined")||i(b.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return b.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=v.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var o=new i,a=t.apply(o,n.concat(v.call(arguments)));return Object(a)===a?a:o}return t.apply(e,n.concat(v.call(arguments)))};return r}),g.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},g.svg=function(){return!!t.createElementNS&&!!t.createElementNS(m.svg,"svg").createSVGRect};for(var x in g)s(g,x)&&(a=x.toLowerCase(),c[a]=g[x](),y.push((c[a]?"":"no-")+a));return c.addTest=function(e,t){if("object"==typeof e)for(var r in e)s(e,r)&&c.addTest(r,e[r]);else{if(e=e.toLowerCase(),c[e]!==n)return c;t="function"==typeof t?t():t,u!==n&&u&&(f.className+=" "+(t?"":"no-")+e),c[e]=t}return c},r(""),d=o=null,c._version=l,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(u?" js "+y.join(" "):""),c}(this,this.document),function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=E[e[b]];return t||(t={},x++,e[b]=x,E[x]=t),t}function o(e,n,r){if(n||(n=t),m)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():v.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),o.canHaveChildren&&!y.test(e)?r.frag.appendChild(o):o}function a(e,n){if(e||(e=t),m)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function l(e){e||(e=t);var r=i(e);return!C.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),m||s(e,r),e}function c(e){for(var t,n=e.getElementsByTagName("*"),i=n.length,o=RegExp("^(?:"+r().join("|")+")$","i"),a=[];i--;)t=n[i],o.test(t.nodeName)&&a.push(t.applyElement(u(t)));return a}function u(e){for(var t,n=e.attributes,r=n.length,i=e.ownerDocument.createElement(T+":"+e.nodeName);r--;)t=n[r],t.specified&&i.setAttribute(t.nodeName,t.nodeValue);return i.style.cssText=e.style.cssText,i}function f(e){for(var t,n=e.split("{"),i=n.length,o=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+T+"\\:$2";i--;)t=n[i]=n[i].split("}"),t[t.length-1]=t[t.length-1].replace(o,a),n[i]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function d(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,o,a=i(e),s=e.namespaces,l=e.parentWindow;return!k||e.printShived?e:(s[T]===void 0&&s.add(T),l.attachEvent("onbeforeprint",function(){t();for(var i,a,s,l=e.styleSheets,u=[],p=l.length,d=Array(p);p--;)d[p]=l[p];for(;s=d.pop();)if(!s.disabled&&N.test(s.media)){try{i=s.imports,a=i.length}catch(h){a=0}for(p=0;a>p;p++)d.push(i[p]);try{u.push(s.cssText)}catch(h){}}u=f(u.reverse().join("")),o=c(e),r=n(e,u)}),l.attachEvent("onafterprint",function(){p(o),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,m,g=e.html5||{},y=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,v=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,b="_html5shiv",x=0,E={};(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,m=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return e.cloneNode===void 0||e.createDocumentFragment===void 0||e.createElement===void 0}()}catch(n){h=!0,m=!0}})();var C={elements:g.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:g.shivCSS!==!1,supportsUnknownElements:m,shivMethods:g.shivMethods!==!1,type:"default",shivDocument:l,createElement:o,createDocumentFragment:a};e.html5=C,l(t);var N=/^$|\b(?:all|print)\b/,T="html5shiv",k=!m&&function(){var n=t.documentElement;return!(t.namespaces===void 0||t.parentWindow===void 0||n.applyElement===void 0||n.removeNode===void 0||e.attachEvent===void 0)}();C.type+=" print",C.shivPrint=d,d(t)}(this,document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function i(e){return"string"==typeof e}function o(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=y.shift();v=1,e?e.t?h(function(){("c"==e.t?p.injectCss:p.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):v=0}function l(e,n,r,i,o,l,c){function u(t){if(!d&&a(f.readyState)&&(b.r=d=1,!v&&s(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&h(function(){E.removeChild(f)},50);for(var r in w[n])w[n].hasOwnProperty(r)&&w[n][r].onload()}}var c=c||p.errorTimeout,f=t.createElement(e),d=0,g=0,b={t:r,s:n,e:o,a:l,x:c};1===w[n]&&(g=1,w[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,g)},y.splice(i,0,b),"img"!=e&&(g||2===w[n]?(E.insertBefore(f,x?null:m),h(u,c)):w[n].push(f))}function c(e,t,n,r,o){return v=0,t=t||"j",i(e)?l("c"==t?N:C,e,t,this.i++,n,r,o):(y.splice(this.i++,0,e),1==y.length&&s()),this}function u(){var e=p;return e.loader={load:c,i:0},e}var f,p,d=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],g={}.toString,y=[],v=0,b="MozAppearance"in d.style,x=b&&!!t.createRange().compareNode,E=x?d:m.parentNode,d=e.opera&&"[object Opera]"==g.call(e.opera),d=!!t.attachEvent&&!d,C=b?"object":d?"script":"img",N=d?"script":C,T=Array.isArray||function(e){return"[object Array]"==g.call(e)},k=[],w={},S={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};p=function(e){function t(e){var t,n,r,e=e.split("!"),i=k.length,o=e.pop(),a=e.length,o={url:o,origUrl:o,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=S[r.shift()])&&(o=t(o,r));for(n=0;i>n;n++)o=k[n](o);return o}function a(e,i,o,a,s){var l=t(e),c=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(i&&(i=r(i)?i:i[e]||i[a]||i[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,i,o,a,s):(w[l.url]?l.noexec=!0:w[l.url]=1,o.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(i)||r(c))&&o.load(function(){u(),i&&i(l.origUrl,s,a),c&&c(l.origUrl,s,a),w[l.url]=2})))}function s(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);p.apply(this,e),d()}),a(e,f,t,0,c);else if(Object(e)===e)for(l in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!n&&!--s&&(r(f)?f=function(){var e=[].slice.call(arguments);p.apply(this,e),d()}:f[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),d()}}(p[l])),a(e[l],f,t,l,c))}else!n&&d()}var s,l,c=!!e.test,u=e.load||e.both,f=e.callback||o,p=f,d=e.complete||o;n(c?e.yep:e.nope,!!u),u&&n(u)}var l,c,f=this.yepnope.loader;if(i(e))a(e,0,f,0);else if(T(e))for(l=0;e.length>l;l++)c=e[l],i(c)?a(c,0,f,0):T(c)?p(c):Object(c)===c&&s(c,f);else Object(e)===e&&s(e,f)},p.addPrefix=function(e,t){S[e]=t},p.addFilter=function(e){k.push(e)},p.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,r,i,l,c){var u,f,d=t.createElement("script"),i=i||p.errorTimeout;d.src=e;for(f in r)d.setAttribute(f,r[f]);n=c?s:n||o,d.onreadystatechange=d.onload=function(){!u&&a(d.readyState)&&(u=1,n(),d.onload=d.onreadystatechange=null)},h(function(){u||(u=1,n(1))},i),l?d.onload():m.parentNode.insertBefore(d,m)},e.yepnope.injectCss=function(e,n,r,i,a,l){var c,i=t.createElement("link"),n=l?s:n||o;i.href=e,i.rel="stylesheet",i.type="text/css";for(c in r)i.setAttribute(c,r[c]);a||(m.parentNode.insertBefore(i,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*!
nessjon.com (2013-03-29)
Janessa and Jonathan's Wedding Website

*/Modernizr.addTest("pointerevents",function(){var e,t=document.createElement("x"),n=document.documentElement,r=window.getComputedStyle;return"pointerEvents"in t.style?(t.style.pointerEvents="auto",t.style.pointerEvents="x",n.appendChild(t),e=r&&"auto"===r(t,"").pointerEvents,n.removeChild(t),!!e):!1});
/*!
nessjon.com (2013-03-29)
Janessa and Jonathan's Wedding Website

*/(function(){var e=function(){for(var e=3,t=document.createElement("b"),n=t.all||[];t.innerHTML="<!--[if gt IE "+ ++e+"]><i><![endif]-->",n[0];);return e>4?e:document.documentMode}();e!==void 0&&(document.documentElement.className+=" ie ie"+e,"undefined"!=typeof Modernizr?Modernizr.ie=e:window.ie=e)})();
/*!

                       (_)
    _ __   ___  ___ ___ _  ___  _ __    ___ ___  _ __ ___
   | '_ \ / _ \/ __/ __| |/ _ \| '_ \  / __/ _ \| '_ ` _ \
   | | | |  __/\__ \__ \ | (_) | | | || (_| (_) | | | | | |
   |_| |_|\___||___/___/ |\___/|_| |_(_)___\___/|_| |_| |_|
                      _/ |
                     |__/
                                                      ;-)
*/


(function() {
  var c, s;

  s = (document.location.protocol === "file:" ? "scripts/" : "/scripts/");

  c = (document.location.protocol === "file:" ? "styles/" : "/styles/");

  yepnope({
    test: Modernizr.ie <= 8,
    yep: s + 'ie.js'
  });

  yepnope({
    test: Modernizr.ie <= 7,
    yep: c + 'ie.css'
  });

  yepnope({
    load: [s + 'jquery.js', s + 'underscore.js', s + 'fastclick.js', s + 'jquery-placeholder.js', s + 'mousetrap.js', s + 'jquery.fitmaps.js'],
    complete: function() {
      return jQuery(app.init());
    }
  });

  window._gaq = [["_setAccount", "UA-35747031-1"], ["_trackPageview"], ["_trackPageLoadTime"]];

  yepnope({
    load: '//www.google-analytics.com/ga.js'
  });

  window.app = {};

  app.init = function() {
    app.setup();
    app.secretSong();
    app.countdown();
    app.navigation();
    app.slideshow();
    app.map();
    app.rsvp();
    return $('html').addClass('ready');
  };

  app.setup = function() {
    new FastClick(document.body);
    $('input, textarea').placeholder();
    _.templateSettings = {
      interpolate: /\#\{(.+?)\}/g
    };
    _.mixin({
      linkify: function(string) {
        string = string.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a target='_blank' href='$1'>$1</a>");
        string = string.replace(/(^|\s)@(\w+)/g, "$1<a target='_blank' href='http://www.twitter.com/$2'>@$2</a>");
        return string = string.replace(/(^|\s)#(\w+)/g, "$1<a target='_blank' href='http://search.twitter.com/search?q=%23$2'>#$2</a>");
      }
    });
    return app.transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
  };

  app.navigation = function() {
    $('header[role=banner] a.menu').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      return $('html').toggleClass('menu');
    });
    $(document).on('click', 'html.menu', function(e) {
      if (!$(e.target).parents('nav[role=navigation]').length) {
        return $('html').removeClass('menu');
      }
    });
    $('nav[role=navigation] > ul > li > a').on('click', function(e) {
      var $nav, href;

      e.preventDefault();
      $nav = $(this).next('nav');
      if ($nav.height() === 0) {
        $nav.closest('ul').find('> li > nav').height(0);
        $nav.height($nav.find('ul:first').height());
        return $nav.hide().show();
      } else {
        $('html').removeClass('menu');
        href = $(this).attr('href');
        return $('html, body').animate({
          scrollTop: $(href).offset().top
        }, 500, function() {
          return window.location.hash = href;
        });
      }
    });
    return $(document).on('swipe', function(e) {
      if (e.direction === 'left') {
        $('html').addClass('menu');
      }
      if (e.direction === 'right') {
        return $('html').removeClass('menu');
      }
    });
  };

  app.countdown = function() {
    return $('.countdown').each(function() {
      var $countdown, date, day, futureTime, hour, minute, month, time, year;

      $countdown = $(this);
      date = $countdown.attr("rel").split(" ")[0];
      time = $countdown.attr("rel").split(" ")[1];
      year = parseInt(date.split("-")[0], 10);
      month = parseInt(date.split("-")[1], 10) - 1;
      day = parseInt(date.split("-")[2], 10);
      hour = parseInt(time.split(":")[0], 10);
      minute = parseInt(time.split(":")[1], 10);
      futureTime = Date.UTC(year, month, day, hour, minute, 0);
      app.updateCountdown($countdown, futureTime);
      return setInterval(function() {
        return app.updateCountdown($countdown, futureTime);
      }, 5000);
    });
  };

  app.updateCountdown = function($countdown, futureTime) {
    var currentTime, d, days, daysFloat, hours, hoursFloat, minutes, minutesFloat;

    d = new Date();
    currentTime = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
    daysFloat = (futureTime - currentTime) / 86400000;
    days = parseInt(daysFloat, 10);
    if (days < 0) {
      days = 0;
    }
    hoursFloat = (daysFloat - days) * 24;
    hours = parseInt(hoursFloat, 10);
    if (hours < 0) {
      hours = 0;
    }
    minutesFloat = (hoursFloat - hours) * 60;
    minutes = parseInt(minutesFloat, 10);
    if (minutes < 0) {
      minutes = 0;
    }
    $countdown.find("dd:nth-of-type(1) figure").text(days);
    $countdown.find("dd:nth-of-type(2) figure").text(hours);
    return $countdown.find("dd:nth-of-type(3) figure").text(minutes);
  };

  app.secretSong = function() {
    app.foundSecretSong = false;
    app.mp3 = $('audio:first').get(0);
    app.mp3.load();
    $(document).keydown(function() {
      if (app.foundSecretSong) {
        if (app.mp3.paused) {
          return app.mp3.play();
        } else {
          return app.mp3.pause();
        }
      }
    });
    return Mousetrap.bind("z o o", function() {
      app.foundSecretSong = true;
      return app.mp3.play();
    });
  };

  app.map = function() {
    return $('figure.map').each(function() {
      var height;

      height = $(this).closest('section').find('.col:first').height();
      return $(this).fitMaps({
        w: '100%',
        h: (height - 100) + 'px'
      });
    });
  };

  app.slideshow = function() {
    return $('div.hero').each(function() {
      var $hero, id,
        _this = this;

      $hero = $(this);
      $hero.find('li:first').css({
        opacity: 1
      });
      app.slideshow.advance = function() {
        var $curr, $prev;

        $prev = $hero.find('li:first');
        $curr = $prev.next('li');
        $curr.animate({
          opacity: 1
        }, 1500);
        return $prev.animate({
          opacity: 0
        }, 1500, function() {
          return $prev.off().detach().appendTo($curr.parent());
        });
      };
      id = setInterval(app.slideshow.advance, 7000);
      return $('header[role=banner] h1 a').on('click', function(e) {
        e.preventDefault();
        return app.slideshow.advance();
      });
    });
  };

  app.rsvp = function() {
    return $('form.rsvp').each(function() {
      return $(this).submit(function(e) {
        var _this = this;

        e.preventDefault();
        return $.post($(this).attr('action'), $(this).serialize(), function(message) {
          return $(_this).html("<blockquote>" + message + "</blockquote>");
        });
      });
    });
  };

}).call(this);
