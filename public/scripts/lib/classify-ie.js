/* Classify IE
   https://gist.github.com/padolsey/527683
*/
;window.ie=function(){for(var a=3,b=document.createElement("b"),c=b.all||[];b.innerHTML="<!--[if gt IE "+ ++a+"]><i><![endif]-->",c[0];);return 4<a?a:document.documentMode}();
if (window.ie) {
  document.documentElement.className += ' ie ie' + window.ie;
}
