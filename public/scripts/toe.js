/*!
nessjon.com (2013-03-29)
Janessa and Jonathan's Wedding Website

*//*!
 * toe.js
 * version 2.0.0
 * author: Damien Antipa
 * https://github.com/dantipa/toe.js
 */
(function(e){var t={Event:function(t){var n={timestamp:(new Date).getTime(),target:t.target,point:[]},r=t.changedTouches||t.originalEvent.changedTouches||t.touches||t.originalEvent.touches;return e.each(r,function(e,t){n.point.push({x:t.pageX,y:t.pageY})}),n},State:function(e){var t=e.point[0];return{start:e,move:[],end:null,pageX:t.x,pageY:t.y}},track:function(n){var r,i=function(e){var i=t.Event(e);r=t.State(i),n.touchstart(e,r,i)},a=function(e){var i=t.Event(e);r.move.push(i),n.touchmove(e,r,i)},o=function(e){var i=t.Event(e);r.end=i,n.touchend(e,r,i)};return n.setup=function(t){e(this).on("touchstart",t,i).on("touchmove",t,a).on("touchend touchcancel",t,o)},n.teardown=function(){e(this).off("touchstart",i).off("touchmove",a).off("touchend touchcancel",o)},n},calc:{getDuration:function(e,t){return t.timestamp-e.timestamp},getDistance:function(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))},getAngle:function(e,t){return 180*Math.atan2(t.y-e.y,t.x-e.x)/Math.PI},getDirection:function(e){return-45>e&&e>-135?"top":e>=-45&&45>=e?"right":e>=45&&135>e?"down":e>=135||-135>=e?"left":"unknown"},getScale:function(e,t){var n=e.point,r=t.point;return 2===n.length&&2===r.length?(Math.sqrt(Math.pow(r[0].x-r[1].x,2)+Math.pow(r[0].y-r[1].y,2))/Math.sqrt(Math.pow(n[0].x-n[1].x,2)+Math.pow(n[0].y-n[1].y,2))).toFixed(2):0},getRotation:function(e,t){var n=e.point,r=t.point;return 2===n.length&&2===r.length?(180*Math.atan2(r[0].y-r[1].y,r[0].x-r[1].x)/Math.PI-180*Math.atan2(n[0].y-n[1].y,n[0].x-n[1].x)/Math.PI).toFixed(2):0}}};e.toe=t})(jQuery,this),function(e,t){e.event.special.swipe=function(){var n={distance:40,duration:300,direction:"all",finger:1};return t.track({touchstart:function(e,t){t.finger=t.start.point.length},touchmove:function(e,t,n){t.finger=n.point.length>t.finger?n.point.length:t.finger},touchend:function(r,i,a){var o,s,c=e.extend(n,r.data);o=t.calc.getDuration(i.start,a),s=t.calc.getDistance(i.start.point[0],a.point[0]),c.duration>o&&s>c.distance&&(i.angle=t.calc.getAngle(i.start.point[0],a.point[0]),i.direction=t.calc.getDirection(i.angle),i.finger!==c.finger||"all"!==c.direction&&i.direction!==c.direction||e(r.target).trigger(e.Event("swipe",i)))}})}()}(jQuery,jQuery.toe,this),function(e,t){e.event.special.tap=function(){var n={distance:10,duration:300,finger:1};return t.track({touchstart:function(e,t,n){t.finger=n.point.length},touchmove:function(e,t,n){t.finger=n.point.length>t.finger?n.point.length:t.finger},touchend:function(r,i,a){var o,s,c=e.extend(n,r.data);o=t.calc.getDuration(i.start,a),s=t.calc.getDistance(i.start.point[0],a.point[0]),c.duration>o&&c.distance>s&&i.finger===c.finger&&e(r.target).trigger(e.Event("tap",i))}})}()}(jQuery,jQuery.toe,this),function(e,t){e.event.special.taphold=function(){var n,r,i={distance:20,duration:500,finger:1};return t.track({touchstart:function(t,a,o){var s=e.extend(i,t.data);r=!1,a.finger=o.point.length,clearTimeout(n),n=setTimeout(function(){r||a.finger===s.finger&&e(t.target).trigger(e.Event("taphold",a))},s.duration)},touchmove:function(n,a,o){var s,c=e.extend(i,n.data);a.finger=o.point.length>a.finger?o.point.length:a.finger,s=t.calc.getDistance(a.start.point[0],o.point[0]),s>c.distance&&(r=!0)},touchend:function(){r=!0,clearTimeout(n)}})}()}(jQuery,jQuery.toe,this),function(e,t){e.event.special.transform=function(){var n,r={scale:.1,rotation:15};return t.track({touchstart:function(){n=!1},touchmove:function(i,a,o){var s=e.extend(r,i.data);return 2!==o.point.length?(a.move.pop(),undefined):(2!==a.start.point.length&&2===o.point.length&&(a.start=e.extend({},o)),a.rotation=t.calc.getRotation(a.start,o),a.scale=t.calc.getScale(a.start,o),(Math.abs(1-a.scale)>s.scale||Math.abs(a.rotation)>s.rotation)&&(n||(e(i.target).trigger(e.Event("transformstart",a)),n=!0),e(i.target).trigger(e.Event("transform",a))),undefined)},touchend:function(r,i,a){n&&(n=!1,2!==a.point.length&&(i.end=e.extend({},i.move[i.move.length-1])),i.rotation=t.calc.getRotation(i.start,i.end),i.scale=t.calc.getScale(i.start,i.end),e(r.target).trigger(e.Event("transformend",i)))}})}()}(jQuery,jQuery.toe,this);