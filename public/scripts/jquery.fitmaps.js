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
(function(e){e.fn.fitMaps=function(t){var n={customSelector:null,h:"100%",w:"100%"};t&&e.extend(n,t);var r=document.createElement("div"),i=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return r.className="fit-maps-style",r.innerHTML="&shy;<style>         			.fluid-width-map-wrapper {        				position: relative;           				width: "+n.w+";    				height: "+n.h+";   				padding: 0;                       			margin: 0px auto;           			}                                 						.fluid-width-map-wrapper iframe {  				width: 100%;                  				height: 100%;                  				top: 0;                       				left: 0;                      			}                                 			</style>",i.parentNode.insertBefore(r,i),this.each(function(){var t=["iframe[src*='maps.google']"];n.customSelector&&t.push(n.customSelector);var r=e(this).find(t.join(","));r.each(function(){var t=e(this);if(!t.parent(".fluid-width-map-wrapper").length){if(!t.attr("id")){var n="fitmap"+Math.floor(999999*Math.random());t.attr("id",n)}t.wrap('<div class="fluid-width-map-wrapper"></div>'),t.removeAttr("height").removeAttr("width")}})})}})(jQuery);