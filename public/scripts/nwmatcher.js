/*!
nessjon.com (2013)
Janessa and Jonathan's Wedding Website

*/(function(e,t){"object"==typeof module&&"object"==typeof exports?module.exports=function(e){var n={};return t(e,n),n}:(e.NW||(e.NW={}),e.NW.Dom||(e.NW.Dom={}),t(e,e.NW.Dom))})(this,function(e,t){var n,r,i,o,a,s,l,c,u,f,d,p,h,m=t,g=e.document,v=g.documentElement,y=[].slice,b={}.toString,x="[#.:]?",E="([~*^$|!]?={1})",C="[\\x20\\t\\n\\r\\f]*",N="[\\x20]|[>+~][^>+~]",k="(?:[-+]?\\d*n)?[-+]?\\d*",w="\"[^\"]*\"|'[^']*'",T="\\([^()]+\\)|\\(.*\\)",S="\\{[^{}]+\\}|\\{.*\\}",A="\\[[^[\\]]*\\]|\\[.*\\]",L="\\[.*\\]|\\(.*\\)|\\{.*\\}",D="(?:[-\\w]|[^\\x00-\\xa0]|\\\\.)",j="(?:-?[_a-zA-Z]{1}[-\\w]*|[^\\x00-\\xa0]+|\\\\.+)+",I="("+w+"|"+j+")",O=C+"("+D+"*:?"+D+"+)"+C+"(?:"+E+C+I+")?"+C,M=O.replace(I,"([\\x22\\x27]*)((?:\\\\?.)*?)\\3"),H="((?:"+k+"|"+w+"|"+x+"|"+D+"+|"+"\\["+O+"\\]|"+"\\(.+\\)|"+C+"|"+",)+)",F=".+",B="(?=[\\x20\\t\\n\\r\\f]*[^>+~(){}<>])(\\*|(?:"+x+j+")"+"|"+N+"|\\["+O+"\\]"+"|\\("+H+"\\)"+"|\\{"+F+"\\}"+"|(?:,|"+C+")"+")+",$=B.replace(H,".*"),R=RegExp(B,"g"),_=RegExp("^"+C+"|"+C+"$","g"),q=RegExp("^((?!:not)("+x+"|"+j+"|\\([^()]*\\))+"+"|\\["+O+"\\]"+")$"),P=RegExp("([^,\\\\()[\\]]+|"+A+"|"+T+"|"+S+"|\\\\."+")+","g"),W=RegExp("(\\["+O+"\\]|"+"\\("+H+"\\)|"+"\\\\.|[^\\x20\\t\\r\\n\\f>+~])+","g"),z=/[\x20\t\n\r\f]+/g,U=RegExp(j+"|^$"),X=function(){var e=(g.appendChild+"").replace(/appendChild/g,"");return function(t,n){var r=t&&t[n]||!1;return r&&"string"!=typeof r&&e==(r+"").replace(RegExp(n,"g"),"")}}(),V=X(g,"hasFocus"),G=X(g,"querySelector"),Y=X(g,"getElementById"),Q=X(v,"getElementsByTagName"),K=X(v,"getElementsByClassName"),J=X(v,"getAttribute"),Z=X(v,"hasAttribute"),et=function(){var e=!1,t=v.id;v.id="length";try{e=!!y.call(g.childNodes,0)[0]}catch(n){}return v.id=t,e}(),tt="nextElementSibling"in v&&"previousElementSibling"in v,nt=Y?function(){var e=!0,t="x"+(+new Date+""),n=g.createElementNS?"a":'<a name="'+t+'">';return(n=g.createElement(n)).name=t,v.insertBefore(n,v.firstChild),e=!!g.getElementById(t),v.removeChild(n),e}():!0,rt=Q?function(){var e=g.createElement("div");return e.appendChild(g.createComment("")),!!e.getElementsByTagName("*")[0]}():!0,it=K?function(){var e,t=g.createElement("div"),n="台北";return t.appendChild(g.createElement("span")).setAttribute("class",n+"abc "+n),t.appendChild(g.createElement("span")).setAttribute("class","x"),e=!t.getElementsByClassName(n)[0],t.lastChild.className=n,e||2!=t.getElementsByClassName(n).length}():!0,ot=J?function(){var e=g.createElement("input");return e.setAttribute("value",5),5!=e.defaultValue}():!0,at=Z?function(){var e=g.createElement("option");return e.setAttribute("selected","selected"),!e.hasAttribute("selected")}():!0,st=function(){var e=g.createElement("select");return e.appendChild(g.createElement("option")),!e.firstChild.selected}(),lt=/opera/i.test(b.call(e.opera)),ct=lt&&parseFloat(opera.version())>=11,ut=G?function(){var e,t=[],n=g.createElement("div"),r=function(e,t,n,r){var i=!1;t.appendChild(n);try{i=t.querySelectorAll(e).length==r}catch(o){}for(;t.firstChild;)t.removeChild(t.firstChild);return i};return e=g.createElement("p"),e.setAttribute("class",""),r('[class^=""]',n,e,1)&&t.push("[*^$]=[\\x20\\t\\n\\r\\f]*(?:\"\"|'')"),e=g.createElement("option"),e.setAttribute("selected","selected"),r(":checked",n,e,0)&&t.push(":checked"),e=g.createElement("input"),e.setAttribute("type","hidden"),r(":enabled",n,e,0)&&t.push(":enabled",":disabled"),e=g.createElement("link"),e.setAttribute("href","x"),r(":link",n,e,1)||t.push(":link"),at&&t.push("\\[[\\x20\\t\\n\\r\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),t.length?RegExp(t.join("|")):{test:function(){return!1}}}():!0,ft=RegExp("(?:\\[[\\x20\\t\\n\\r\\f]*class\\b|\\."+j+")"),dt=RegExp(rt&&it?"^#?-?[_a-zA-Z]{1}"+D+"*$":lt?"^(?:\\*|#-?[_a-zA-Z]{1}"+D+"*)$":"^(?:\\*|[.#]?-?[_a-zA-Z]{1}"+D+"*)$"),pt={a:1,A:1,area:1,AREA:1,link:1,LINK:1},ht={checked:1,disabled:1,ismap:1,multiple:1,readonly:1,selected:1},mt={value:"defaultValue",checked:"defaultChecked",selected:"defaultSelected"},gt={action:2,cite:2,codebase:2,data:2,href:2,longdesc:2,lowsrc:2,src:2,usemap:2},vt={"class":0,accept:1,"accept-charset":1,align:1,alink:1,axis:1,bgcolor:1,charset:1,checked:1,clear:1,codetype:1,color:1,compact:1,declare:1,defer:1,dir:1,direction:1,disabled:1,enctype:1,face:1,frame:1,hreflang:1,"http-equiv":1,lang:1,language:1,link:1,media:1,method:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,rel:1,rev:1,rules:1,scope:1,scrolling:1,selected:1,shape:1,target:1,text:1,type:1,valign:1,valuetype:1,vlink:1},yt={accept:1,"accept-charset":1,alink:1,axis:1,bgcolor:1,charset:1,codetype:1,color:1,enctype:1,face:1,hreflang:1,"http-equiv":1,lang:1,language:1,link:1,media:1,rel:1,rev:1,target:1,text:1,type:1,vlink:1},bt={},xt={"=":"n=='%m'","^=":"n.indexOf('%m')==0","*=":"n.indexOf('%m')>-1","|=":"(n+'-').indexOf('%m-')==0","~=":"(' '+n+' ').indexOf(' %m ')>-1","$=":"n.substr(n.length-'%m'.length)=='%m'"},Et={ID:RegExp("^\\*?#("+D+"+)|"+L),TAG:RegExp("^("+D+"+)|"+L),CLASS:RegExp("^\\*?\\.("+D+"+$)|"+L)},Ct={spseudos:/^\:(root|empty|(?:first|last|only)(?:-child|-of-type)|nth(?:-last)?(?:-child|-of-type)\(\s*(even|odd|(?:[-+]{0,1}\d*n\s*)?[-+]{0,1}\s*\d*)\s*\))?(.*)/i,dpseudos:/^\:(link|visited|target|active|focus|hover|checked|disabled|enabled|selected|lang\(([-\w]{2,})\)|not\(([^()]*|.*)\))?(.*)/i,attribute:RegExp("^\\["+M+"\\](.*)"),children:/^[\x20\t\n\r\f]*\>[\x20\t\n\r\f]*(.*)/,adjacent:/^[\x20\t\n\r\f]*\+[\x20\t\n\r\f]*(.*)/,relative:/^[\x20\t\n\r\f]*\~[\x20\t\n\r\f]*(.*)/,ancestor:/^[\x20\t\n\r\f]+(.*)/,universal:/^\*(.*)/,id:RegExp("^#("+D+"+)(.*)"),tagName:RegExp("^("+D+"+)(.*)"),className:RegExp("^\\.("+D+"+)(.*)")},Nt=function(e,t){var n,r=-1;if(!e.length&&Array.slice)return Array.slice(t);for(;n=t[++r];)e[e.length]=n;return e},kt=function(e,t,n){for(var r,i=-1;(r=t[++i])&&!1!==n(e[e.length]=r););return e},wt=function(e,t){var n,r=g;o=e,g=e.ownerDocument||e,(t||r!==g)&&(v=g.documentElement,h="DiV"==g.createElement("DiV").nodeName,p=h||"string"!=typeof g.compatMode?function(){var e=g.createElement("div").style;return e&&(e.width=1)&&"1px"==e.width}():0>g.compatMode.indexOf("CSS"),n=g.createElement("div"),n.appendChild(g.createElement("p")).setAttribute("class","xXx"),n.appendChild(g.createElement("p")).setAttribute("class","xxx"),f=!h&&K&&p&&(2!=n.getElementsByClassName("xxx").length||2!=n.getElementsByClassName("xXx").length),d=!h&&G&&p&&(2!=n.querySelectorAll("[class~=xxx]").length||2!=n.querySelectorAll(".xXx").length),Ut.CACHING&&m.setCache(!0,g))},Tt=function(e,t){for(var n=-1,r=null;(r=t[++n])&&r.getAttribute("id")!=e;);return r},St=nt?function(e,t){var n=null;return e=e.replace(/\\([^\\]{1})/g,"$1"),h||9!=t.nodeType?Tt(e,t.getElementsByTagName("*")):(n=t.getElementById(e))&&n.name==e&&t.getElementsByName?Tt(e,t.getElementsByName(e)):n}:function(e,t){return e=e.replace(/\\([^\\]{1})/g,"$1"),t.getElementById&&t.getElementById(e)||Tt(e,t.getElementsByTagName("*"))},At=function(e,t){return t||(t=g),o!==t&&wt(t),St(e,t)},Lt=function(e,t){var n="*"==e,r=t,i=[],o=r.firstChild;for(n||(e=e.toUpperCase());r=o;)if(r.tagName>"@"&&(n||r.tagName.toUpperCase()==e)&&(i[i.length]=r),!(o=r.firstChild||r.nextSibling))for(;!o&&(r=r.parentNode)&&r!==t;)o=r.nextSibling;return i},Dt=!rt&&et?function(e,t){return h||11==t.nodeType?Lt(e,t):y.call(t.getElementsByTagName(e),0)}:function(e,t){var n,r=-1,i=r,o=[],a=t.getElementsByTagName(e);if("*"==e)for(;n=a[++r];)n.nodeName>"@"&&(o[++i]=n);else for(;n=a[++r];)o[r]=n;return o},jt=function(e,t){return t||(t=g),o!==t&&wt(t),Dt(e,t)},It=function(e,t){return Jt('[name="'+e.replace(/\\([^\\]{1})/g,"$1")+'"]',t)},Ot=function(e,t){var n,r,i=-1,o=i,a=[],s=Dt("*",t);for(e=" "+(p?e.toLowerCase():e).replace(/\\([^\\]{1})/g,"$1")+" ";n=s[++i];)r=h?n.getAttribute("class"):n.className,r&&r.length&&(" "+(p?r.toLowerCase():r).replace(z," ")+" ").indexOf(e)>-1&&(a[++o]=n);return a},Mt=function(e,t){return it||f||h||!t.getElementsByClassName?Ot(e,t):y.call(t.getElementsByClassName(e.replace(/\\([^\\]{1})/g,"$1")),0)},Ht=function(e,t){return t||(t=g),o!==t&&wt(t),Mt(e,t)},Ft="compareDocumentPosition"in v?function(e,t){return 16==(16&e.compareDocumentPosition(t))}:"contains"in v?function(e,t){return e!==t&&e.contains(t)}:function(e,t){for(;t=t.parentNode;)if(t===e)return!0;return!1},Bt=ot?function(e,t){return t=t.toLowerCase(),"object"==typeof e[t]?e.attributes[t]&&e.attributes[t].value||"":"type"==t?e.getAttribute(t)||"":gt[t]?e.getAttribute(t,2)||"":ht[t]?e.getAttribute(t)?t:"false":(e=e.getAttributeNode(t))&&e.value||""}:function(e,t){return e.getAttribute(t)||""},$t=at?function(e,t){return t=t.toLowerCase(),mt[t]?!!e[mt[t]]:(e=e.getAttributeNode(t),!(!e||!e.specified))}:function(e,t){return h?!!e.getAttribute(t):e.hasAttribute(t)},Rt=function(e){for(e=e.firstChild;e;){if(3==e.nodeType||e.nodeName>"@")return!1;e=e.nextSibling}return!0},_t=function(e){return $t(e,"href")&&pt[e.nodeName]},qt=function(e,t){for(var n=1,r=t?"nextSibling":"previousSibling";e=e[r];)e.nodeName>"@"&&++n;return n},Pt=function(e,t){for(var n=1,r=t?"nextSibling":"previousSibling",i=e.nodeName;e=e[r];)e.nodeName==i&&++n;return n},Wt=function(e){if("string"==typeof e)return Ut[e];if("object"!=typeof e)return!1;for(var t in e)Ut[t]=!!e[t],"SIMPLENOT"==t?(en={},tn={},nn={},rn={},Ut.USE_QSAPI=!1):"USE_QSAPI"==t&&(Ut[t]=!!e[t]&&G);return R=RegExp(Ut.SIMPLENOT?B:$,"g"),!0},zt=function(t){if(Ut.VERBOSITY)throw Error(t);e.console&&e.console.log&&e.console.log(t)},Ut={CACHING:!1,SHORTCUTS:!1,SIMPLENOT:!0,UNIQUE_ID:!0,USE_HTML5:!0,USE_QSAPI:G,VERBOSITY:!0},Xt="r[r.length]=c[k];if(f&&false===f(c[k]))break main;else continue main;",Vt=function(e,t,n){var r="string"==typeof e?e.match(P):e;if("string"==typeof t||(t=""),1==r.length)t+=Yt(r[0],n?Xt:"f&&f(k);return true;",n);else for(var i,o=-1,a={};i=r[++o];)i=i.replace(_,""),!a[i]&&(a[i]=!0)&&(t+=Yt(i,n?Xt:"f&&f(k);return true;",n));return n?Function("c,s,r,d,h,g,f,v","var N,n,x=0,k=-1,e;main:while((e=c[++k])){"+t+"}return r;"):Function("e,s,r,d,h,g,f,v","var N,n,x=0,k=e;"+t+"return false;")},Gt="var z=v[@]||(v[@]=[]),l=z.length-1;while(l>=0&&z[l]!==e)--l;if(l!==-1){break;}z[z.length]=e;",Yt=function(e,t,n){for(var r,i,o,a,s,l,c,u,f,d=0;e;){if(d++,s=e.match(Ct.universal))a="";else if(s=e.match(Ct.id))t="if("+(h?'s.getAttribute(e,"id")':'(e.submit?s.getAttribute(e,"id"):e.id)')+'=="'+s[1]+'"'+"){"+t+"}";else if(s=e.match(Ct.tagName))t="if(e.nodeName"+(h?'=="'+s[1]+'"':'.toUpperCase()=="'+s[1].toUpperCase()+'"')+"){"+t+"}";else if(s=e.match(Ct.className))t="if((n="+(h?'s.getAttribute(e,"class")':"e.className")+')&&n.length&&(" "+'+(p?"n.toLowerCase()":"n")+".replace("+z+'," ")+" ").indexOf(" '+(p?s[1].toLowerCase():s[1])+' ")>-1'+"){"+t+"}";else if(s=e.match(Ct.attribute)){if(a=s[1].split(":"),a=2==a.length?a[1]:a[0]+"",s[2]&&!xt[s[2]])return zt('Unsupported operator in attribute selectors "'+e+'"'),"";u=!1,f="false",s[2]&&s[4]&&(f=xt[s[2]])?(vt["class"]=p?1:0,s[4]=s[4].replace(/(\x22|\x27)/g,"\\$1"),s[4]=s[4].replace(/\\([0-9a-f]{2,2})/g,"\\x$1"),u=(h?yt:vt)[a.toLowerCase()],f=f.replace(/\%m/g,u?s[4].toLowerCase():s[4])):("!="==s[2]||"="==s[2])&&(s[4]=s[4].replace(/(\x22|\x27)/g,"\\$1"),f="n"+s[2]+'="'+s[4]+'"'),a="n=s."+(s[2]?"get":"has")+'Attribute(e,"'+s[1]+'")'+(u?".toLowerCase();":";"),t=a+"if("+(s[2]?f:"n")+"){"+t+"}"}else if(s=e.match(Ct.adjacent))t=(n?"":Gt.replace(/@/g,d))+t,t=tt?"var N"+d+"=e;while(e&&(e=e.previousElementSibling)){"+t+"break;}e=N"+d+";":"var N"+d+'=e;while(e&&(e=e.previousSibling)){if(e.nodeName>"@"){'+t+"break;}}e=N"+d+";";else if(s=e.match(Ct.relative))t=(n?"":Gt.replace(/@/g,d))+t,t=tt?"var N"+d+"=e;e=e.parentNode.firstElementChild;"+"while(e&&e!==N"+d+"){"+t+"e=e.nextElementSibling;}e=N"+d+";":"var N"+d+"=e;e=e.parentNode.firstChild;"+"while(e&&e!==N"+d+'){if(e.nodeName>"@"){'+t+"}e=e.nextSibling;}e=N"+d+";";else if(s=e.match(Ct.children))t=(n?"":Gt.replace(/@/g,d))+t,t="var N"+d+"=e;while(e&&e!==h&&e!==g&&(e=e.parentNode)){"+t+"break;}e=N"+d+";";else if(s=e.match(Ct.ancestor))t=(n?"":Gt.replace(/@/g,d))+t,t="var N"+d+"=e;while(e&&e!==h&&e!==g&&(e=e.parentNode)){"+t+"}e=N"+d+";";else if((s=e.match(Ct.spseudos))&&s[1])switch(s[1]){case"root":t=s[3]?"if(e===h||s.contains(h,e)){"+t+"}":"if(e===h){"+t+"}";break;case"empty":t="if(s.isEmpty(e)){"+t+"}";break;default:if(s[1]&&s[2]){if("n"==s[2]){t="if(e!==h){"+t+"}";break}"even"==s[2]?(r=2,i=0):"odd"==s[2]?(r=2,i=1):(i=(o=s[2].match(/(-?\d+)$/))?parseInt(o[1],10):0,r=(o=s[2].match(/(-?\d*)n/i))?parseInt(o[1],10):0,o&&"-"==o[1]&&(r=-1)),u=r>1?/last/i.test(s[1])?"(n-("+i+"))%"+r+"==0":"n>="+i+"&&(n-("+i+"))%"+r+"==0":-1>r?/last/i.test(s[1])?"(n-("+i+"))%"+r+"==0":"n<="+i+"&&(n-("+i+"))%"+r+"==0":0===r?"n=="+i:/last/i.test(s[1])?-1==r?"n>="+i:"n<="+i:-1==r?"n<="+i:"n>="+i,t="if(e!==h){n=s["+(/-of-type/i.test(s[1])?'"nthOfType"':'"nthElement"')+"]"+"(e,"+(/last/i.test(s[1])?"true":"false")+");"+"if("+u+"){"+t+"}"+"}"}else r=/first/i.test(s[1])?"previous":"next",o=/only/i.test(s[1])?"previous":"next",i=/first|last/i.test(s[1]),f=/-of-type/i.test(s[1])?"&&n.nodeName!=e.nodeName":'&&n.nodeName<"@"',t="if(e!==h){"+("n=e;while((n=n."+r+"Sibling)"+f+");if(!n){"+(i?t:"n=e;while((n=n."+o+"Sibling)"+f+");if(!n){"+t+"}")+"}")+"}"}else if((s=e.match(Ct.dpseudos))&&s[1])switch(s[1].match(/^\w+/)[0]){case"not":if(a=s[3].replace(_,""),Ut.SIMPLENOT&&!q.test(a))return zt('Negation pseudo-class only accepts simple selectors "'+e+'"'),"";t="compatMode"in g?"if(!"+Vt(a,"",!1)+"(e,s,r,d,h,g)){"+t+"}":'if(!s.match(e, "'+a.replace(/\x22/g,'\\"')+'",g)){'+t+"}";break;case"checked":t='if((typeof e.form!=="undefined"&&(/^(?:radio|checkbox)$/i).test(e.type)&&e.checked)'+(Ut.USE_HTML5?"||(/^option$/i.test(e.nodeName)&&(e.selected||e.checked))":"")+"){"+t+"}";break;case"disabled":t='if(((typeof e.form!=="undefined"'+(Ut.USE_HTML5?"":"&&!(/^hidden$/i).test(e.type)")+")||s.isLink(e))&&e.disabled===true){"+t+"}";break;case"enabled":t='if(((typeof e.form!=="undefined"'+(Ut.USE_HTML5?"":"&&!(/^hidden$/i).test(e.type)")+")||s.isLink(e))&&e.disabled===false){"+t+"}";break;case"lang":u="",s[2]&&(u=s[2].substr(0,2)+"-"),t='do{(n=e.lang||"").toLowerCase();if((n==""&&h.lang=="'+s[2].toLowerCase()+'")||'+'(n&&(n=="'+s[2].toLowerCase()+'"||n.substr(0,3)=="'+u.toLowerCase()+'")))'+"{"+t+"break;}}while((e=e.parentNode)&&e!==g);";break;case"target":o=g.location?g.location.hash:"",o&&(t='if(e.id=="'+o.slice(1)+'"){'+t+"}");break;case"link":t="if(s.isLink(e)&&!e.visited){"+t+"}";break;case"visited":t="if(s.isLink(e)&&e.visited){"+t+"}";break;case"active":if(h)break;t="if(e===d.activeElement){"+t+"}";break;case"hover":if(h)break;t="if(e===d.hoverElement){"+t+"}";break;case"focus":if(h)break;t=V?"if(e===d.activeElement&&d.hasFocus()&&(e.type||e.href||!isNaN(e.tabIndex))){"+t+"}":"if(e===d.activeElement&&(e.type||e.href)){"+t+"}";break;case"selected":a=st?"||(n=e.parentNode)&&n.options[n.selectedIndex]===e":"",t="if(/^option$/i.test(e.nodeName)&&(e.selected||e.checked"+a+")){"+t+"}";break;default:}else{a=!1,c=!1;for(a in bt)if((s=e.match(bt[a].Expression))&&s[1]&&(l=bt[a].Callback(s,t),t=l.source,c=l.status))break;if(!c)return zt('Unknown pseudo-class selector "'+e+'"'),"";if(!a)return zt('Unknown token in selector "'+e+'"'),""}if(!s)return zt('Invalid syntax in selector "'+e+'"'),"";e=s&&s[s.length-1]}return t},Qt=function(e,t,r,i){var a;if(!(e&&e.nodeName>"@"))return zt("Invalid element argument"),!1;if("string"!=typeof t)return zt("Invalid selector argument"),!1;if(r&&1==r.nodeType&&!Ft(r,e))return!1;if(o!==r&&wt(r||(r=e.ownerDocument)),t=t.replace(_,""),Ut.SHORTCUTS&&(t=NW.Dom.shortcuts(t,e,r)),s!=t){if(!(a=t.match(R))||a[0]!=t)return zt('The string "'+t+'", is not a valid CSS selector'),!1;n=2>(a=t.match(P)).length,s=t,c=a}else a=c;return tn[t]&&en[t]===r||(tn[t]=Vt(n?[t]:a,"",!1),en[t]=r),tn[t](e,on,[],g,v,r,i,{})},Kt=function(e,t){return Jt(e,t,function(){return!1})[0]||null},Jt=function(e,t,n){var s,c,f,p,b,x,E=e;if(0===arguments.length)return zt("Not enough arguments"),[];if("string"!=typeof e)return[];if(t&&!/1|9|11/.test(t.nodeType))return zt("Invalid or illegal context element"),[];if(o!==t&&wt(t||(t=g)),Ut.CACHING&&(p=m.loadResults(E,t,g,v)))return n?kt([],p,n):p;if(!ct&&dt.test(e))switch(e.charAt(0)){case"#":Ut.UNIQUE_ID&&(p=(f=St(e.slice(1),t))?[f]:[]);break;case".":p=Mt(e.slice(1),t);break;default:p=Dt(e,t)}else if(!(h||!Ut.USE_QSAPI||d&&ft.test(e)||ut.test(e)))try{p=t.querySelectorAll(e)}catch(C){}if(p)return p=n?kt([],p,n):et?y.call(p):Nt([],p),Ut.CACHING&&m.saveResults(E,t,g,p),p;if(e=e.replace(_,""),Ut.SHORTCUTS&&(e=NW.Dom.shortcuts(e,t)),c=l!=e){if(!(b=e.match(R))||b[0]!=e)return zt('The string "'+e+'", is not a valid CSS selector'),[];r=2>(b=e.match(P)).length,l=e,u=b}else b=u;if(11==t.nodeType)p=t.childNodes;else if(!h&&r){if(c&&(b=e.match(W),x=b[b.length-1],i=x.split(":not")[0],a=e.length-x.length),Ut.UNIQUE_ID&&(b=i.match(Et.ID))&&(x=b[1])?(f=St(x,t))&&(Qt(f,e)?(n&&n(f),p=[f]):p=[]):Ut.UNIQUE_ID&&(b=e.match(Et.ID))&&(x=b[1])&&((f=St(x,g))?"#"+x==e?(n&&n(f),p=[f]):t=/[>+~]/.test(e)?f.parentNode:f:p=[]),p)return Ut.CACHING&&m.saveResults(E,t,g,p),p;if(!K&&(b=i.match(Et.TAG))&&(x=b[1])){if(0===(p=Dt(x,t)).length)return[];e=e.slice(0,a)+e.slice(a).replace(x,"*")}else if((b=i.match(Et.CLASS))&&(x=b[1])){if(0===(p=Mt(x,t)).length)return[];e=U.test(e.charAt(e.indexOf(x)-1))?e.slice(0,a)+e.slice(a).replace("."+x,""):e.slice(0,a)+e.slice(a).replace("."+x,"*")}else if((b=e.match(Et.CLASS))&&(x=b[1])){if(0===(p=Mt(x,t)).length)return[];for(s=0,els=[];p.length>s;++s)els=Nt(els,p[s].getElementsByTagName("*"));p=els,e=U.test(e.charAt(e.indexOf(x)-1))?e.slice(0,a)+e.slice(a).replace("."+x,""):e.slice(0,a)+e.slice(a).replace("."+x,"*")}else if(K&&(b=i.match(Et.TAG))&&(x=b[1])){if(0===(p=Dt(x,t)).length)return[];e=e.slice(0,a)+e.slice(a).replace(x,"*")}}return p||(p=/^(?:applet|object)$/i.test(t.nodeName)?t.childNodes:Dt("*",t)),rn[e]&&nn[e]===t||(rn[e]=Vt(r?[e]:b,"",!0),nn[e]=t),p=rn[e](p,on,[],g,v,t,n,{}),Ut.CACHING&&m.saveResults(E,t,g,p),p},Zt=function(e){return e},en={},tn={},nn={},rn={},on={nthElement:qt,nthOfType:Pt,getAttribute:Bt,hasAttribute:$t,byClass:Mt,byName:It,byTag:Dt,byId:St,contains:Ft,isEmpty:Rt,isLink:_t,select:Jt,match:Qt},an={prefixes:x,encoding:D,operators:E,whitespace:C,identifier:j,attributes:O,combinators:N,pseudoclass:H,pseudoparms:k,quotedvalue:w};m.ACCEPT_NODE=Xt,m.emit=zt,m.byId=At,m.byTag=jt,m.byName=It,m.byClass=Ht,m.getAttribute=Bt,m.hasAttribute=$t,m.match=Qt,m.first=Kt,m.select=Jt,m.compile=Vt,m.contains=Ft,m.configure=Wt,m.setCache=Zt,m.loadResults=Zt,m.saveResults=Zt,m.shortcuts=Zt,m.Config=Ut,m.Snapshot=on,m.Operators=xt,m.Selectors=bt,m.Tokens=an,m.registerOperator=function(e,t){xt[e]||(xt[e]=t)},m.registerSelector=function(e,t,n){bt[e]||(bt[e]={Expression:t,Callback:n})},wt(g,!0)});