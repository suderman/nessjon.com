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
Modernizr.addTest("pointerevents",function(){var e,t=document.createElement("x"),n=document.documentElement,r=window.getComputedStyle;return"pointerEvents"in t.style?(t.style.pointerEvents="auto",t.style.pointerEvents="x",n.appendChild(t),e=r&&"auto"===r(t,"").pointerEvents,n.removeChild(t),!!e):!1});