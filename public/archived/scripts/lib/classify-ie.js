/* Classify IE
   https://gist.github.com/padolsey/527683#comment-786682
*/
;window.ie = (function(){
  // for-loop saves characters over while
  for( var v = 3,
        // b just as good as a div with 2 fewer characters
        el = document.createElement('b'),
        // el.all instead of el.getElementsByTagName('i')
        // empty array as loop breaker (and exception-avoider) for non-IE and IE10+
        all = el.all || [];
      // i tag not well-formed since we know that IE5-IE9 won't mind
      el.innerHTML = '<!--[if gt IE ' + (++v) + ']><i><![endif]-->',
      all[0];
    );
  // instead of undefined, returns the documentMode for IE10+ compatibility
  // non-IE will still get undefined as before
  return v > 4 ? v : document.documentMode;
}());

if (window.ie) {
  document.documentElement.className += ' ie ie' + window.ie;
}
