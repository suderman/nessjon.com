/*!
                     (_)                                 
 _ __   ___  ___ ___ _  ___  _ __    ___ ___  _ __ ___  
| '_ \ / _ \/ __/ __| |/ _ \| '_ \  / __/ _ \| '_ ' _ \ 
| | | |  __/\__ \__ \ | (_) | | | || (_| (_) | | | | | |
|_| |_|\___||___/___/ |\___/|_| |_(_)___\___/|_| |_| |_|
                   _/ |                                 
                  |__/                                  

nessjon.com (2013-03-28)
Janessa and Jonathan's Wedding Website 

*/
/*!
                     (_)                                 
 _ __   ___  ___ ___ _  ___  _ __    ___ ___  _ __ ___  
| '_ \ / _ \/ __/ __| |/ _ \| '_ \  / __/ _ \| '_ ' _ \ 
| | | |  __/\__ \__ \ | (_) | | | || (_| (_) | | | | | |
|_| |_|\___||___/___/ |\___/|_| |_(_)___\___/|_| |_| |_|
                   _/ |                                 
                  |__/                                  

nessjon.com (2013-03-28)
Janessa and Jonathan's Wedding Website 

*/
/*!
                     (_)                                 
 _ __   ___  ___ ___ _  ___  _ __    ___ ___  _ __ ___  
| '_ \ / _ \/ __/ __| |/ _ \| '_ \  / __/ _ \| '_ ' _ \ 
| | | |  __/\__ \__ \ | (_) | | | || (_| (_) | | | | | |
|_| |_|\___||___/___/ |\___/|_| |_(_)___\___/|_| |_| |_|
                   _/ |                                 
                  |__/                                  

nessjon.com (2013-03-28)
Janessa and Jonathan's Wedding Website 

*/
/*!
                     (_)                                 
 _ __   ___  ___ ___ _  ___  _ __    ___ ___  _ __ ___  
| '_ \ / _ \/ __/ __| |/ _ \| '_ \  / __/ _ \| '_ ' _ \ 
| | | |  __/\__ \__ \ | (_) | | | || (_| (_) | | | | | |
|_| |_|\___||___/___/ |\___/|_| |_(_)___\___/|_| |_| |_|
                   _/ |                                 
                  |__/                                  

nessjon.com (2013-03-28)
Janessa and Jonathan's Wedding Website 

*/
/*!
                     (_)                                 
 _ __   ___  ___ ___ _  ___  _ __    ___ ___  _ __ ___  
| '_ \ / _ \/ __/ __| |/ _ \| '_ \  / __/ _ \| '_ ' _ \ 
| | | |  __/\__ \__ \ | (_) | | | || (_| (_) | | | | | |
|_| |_|\___||___/___/ |\___/|_| |_(_)___\___/|_| |_| |_|
                   _/ |                                 
                  |__/                                  

nessjon.com (2013-03-28)
Janessa and Jonathan's Wedding Website 

*/
(function(){function e(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function t(e){return"keypress"==e.type?String.fromCharCode(e.which):f[e.which]?f[e.which]:p[e.which]?p[e.which]:String.fromCharCode(e.which).toLowerCase()}function n(e){var t,e=e||{},n=!1;for(t in y)e[t]?n=!0:y[t]=0;n||(b=!1)}function r(e,t,n,r,i){var o,s,l=[],u=n.type;if(!m[e])return[];for("keyup"==u&&a(e)&&(t=[e]),o=0;m[e].length>o;++o)s=m[e][o],s.seq&&y[s.seq]!=s.level||u!=s.action||("keypress"!=u||n.metaKey||n.ctrlKey)&&t.sort().join(",")!==s.modifiers.sort().join(",")||(r&&s.combo==i&&m[e].splice(o,1),l.push(s));return l}function i(e,t,n){T.stopCallback(t,t.target||t.srcElement,n)||!1!==e(t,n)||(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.returnValue=!1,t.cancelBubble=!0)}function o(e){"number"!=typeof e.which&&(e.which=e.keyCode);var o=t(e);if(o)if("keyup"==e.type&&v==o)v=!1;else{var s=[];e.shiftKey&&s.push("shift"),e.altKey&&s.push("alt"),e.ctrlKey&&s.push("ctrl"),e.metaKey&&s.push("meta");var l,s=r(o,s,e),u={},c=!1;for(l=0;s.length>l;++l)s[l].seq?(c=!0,u[s[l].seq]=1,i(s[l].callback,e,s[l].combo)):!c&&!b&&i(s[l].callback,e,s[l].combo);e.type==b&&!a(o)&&n(u)}}function a(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function s(e,t,n){if(!n){if(!u){u={};for(var r in f)r>95&&112>r||f.hasOwnProperty(r)&&(u[f[r]]=r)}n=u[e]?"keydown":"keypress"}return"keypress"==n&&t.length&&(n="keydown"),n}function l(e,o,u,f,p){var g,x,e=e.replace(/\s+/g," "),T=e.split(" "),C=[];if(T.length>1){var N=e,k=u;for(y[N]=0,k||(k=s(T[0],[])),e=function(){b=k,++y[N],clearTimeout(c),c=setTimeout(n,1e3)},u=function(e){i(o,e,N),"keyup"!==k&&(v=t(e)),setTimeout(n,10)},f=0;T.length>f;++f)l(T[f],T.length-1>f?e:u,k,N,f)}else{for(x="+"===e?["+"]:e.split("+"),T=0;x.length>T;++T)g=x[T],h[g]&&(g=h[g]),u&&"keypress"!=u&&d[g]&&(g=d[g],C.push("shift")),a(g)&&C.push(g);u=s(g,C,u),m[g]||(m[g]=[]),r(g,C,{type:u},!f,e),m[g][f?"unshift":"push"]({callback:o,modifiers:C,action:u,seq:f,level:p,combo:e})}}for(var u,c,f={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},p={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},d={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},h={option:"alt",command:"meta","return":"enter",escape:"esc"},m={},g={},y={},v=!1,b=!1,x=1;20>x;++x)f[111+x]="f"+x;for(x=0;9>=x;++x)f[x+96]=x;e(document,"keypress",o),e(document,"keydown",o),e(document,"keyup",o);var T={bind:function(e,t,n){for(var r=e instanceof Array?e:[e],i=0;r.length>i;++i)l(r[i],t,n);return g[e+":"+n]=t,this},unbind:function(e,t){return g[e+":"+t]&&(delete g[e+":"+t],this.bind(e,function(){},t)),this},trigger:function(e,t){return g[e+":"+t](),this},reset:function(){return m={},g={},this},stopCallback:function(e,t){return(" "+t.className+" ").indexOf(" mousetrap ")>-1?!1:"INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.contentEditable&&"true"==t.contentEditable}};window.Mousetrap=T,"function"==typeof define&&define.amd&&define("mousetrap",function(){return T})})();