/*!
nessjon.com (2013-04-03)
Janessa and Jonathan's Wedding Website

*/(function(){var e=function(e){e.addFilter(function(t){for(path in e.paths){var n=RegExp("^"+path);if(t.url.match(n))return t.url=t.url.replace(n,e.paths[path]),t}return t})};yepnope?e(yepnope):modernizr.load&&e(modernizr.load)})();