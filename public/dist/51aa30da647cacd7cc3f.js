/*!
 * Copyright 2017 by Ding
 * @author Ding <ding-js@outlook.com>
 */
var ding3=webpackJsonpding_id_([3],{109:function(t,e,i){"use strict";function n(){var t=v.alarm,e="";t&&t.length>0?t.forEach(function(t,i){e+="<p>闹钟"+(i+1)+" : "+t.time.toLocaleTimeString()+"</p>"}):e="暂无闹钟",f.innerHTML=e}function r(){var t=new Date,e=new Date(t.getTime()-o(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())).getTime(),i=u.map(function(t){return t.value||0}),n=o.apply(void 0,i);return new Date(e+n)}function o(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var i=[60,60,1e3,1],n=i.length,r=0;return t.length>n&&(t=t.slice(0,n)),t.forEach(function(t,e){r+=i.slice(e,n).reduce(function(t,e){return t*e},parseInt(t))}),r}Object.defineProperty(e,"__esModule",{value:!0}),i(258);var a=i(78),s=i(272),l=document.querySelector("#time"),u=Array.prototype.slice.call(l.querySelectorAll("input")),c=document.querySelector("#clock"),h=document.querySelector("#pick-zone"),f=document.querySelector("#alarm-info"),d=document.querySelector("#set-alarm"),m=document.querySelector("#reset-clock"),g=document.querySelector("#set-time");if(window.innerWidth<768){var p=Math.min(window.innerWidth,window.innerHeight)-10;c.width=p,c.height=p}var v=new s.default(c);l.addEventListener("change",function(t){var e=t.target;if("input"===e.tagName.toLowerCase()){var i=e.value,n=+i,r=+e.getAttribute("max");e.value=""===i?"":n>r?""+r:n<0?"":n<10?"0"+n:""+n}}),g.addEventListener("click",function(t){var e=new Date,i=r();h.value="",v.offset=i.getTime()-e.getTime()}),h.addEventListener("change",function(t){var e=t.target,i=+e.value,n=new Date,r=o(0,n.getTimezoneOffset());u.forEach(function(t){t.value=""}),v.offset=r+o(i)}),d.addEventListener("click",function(t){v.setAlarm(r(),function(t){a.toast("闹钟响啦!"),n()}),n(),h.value=""}),m.addEventListener("click",function(){v.offset=0,v.clearAlarm(),n()})},258:function(t,e){},272:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){var i=this;this.draw=function(){var t=i.getCurrentTime(),e=i._ctx,n=i._width,r=i._height,o={x:n/2,y:r/2},a=i._options,s=a.color,l=a.radius,u=.08*l;e.save(),e.clearRect(0,0,n,r),e.strokeStyle=s,e.lineWidth=u,e.beginPath(),e.arc(o.x,o.y,l-u/2,0,2*Math.PI),e.stroke(),e.restore(),e.save();var c=u+.02*l;e.fillStyle=s,e.translate(l,l),e.rotate(-Math.PI/30);for(var h=0;h<60;h++){var f=h%5==0?l/35:l/70,d=l/10,m=-f/2,g=c-l;e.rotate(Math.PI/30),e.beginPath(),e.rect(m,g,f,d),e.fill()}e.setTransform(1,0,0,1,0,0),e.restore(),e.save();var p=l-(u+c+.13*l),v=.18*l;e.fillStyle=s,e.font=v+"px sans-serif",e.textAlign="center",e.textBaseline="middle";for(var h=1;h<=12;h++){var y=h/12*2*Math.PI,_=i.getCoordinate(p,y),m=_.x,g=_.y;e.fillText(""+h,m,g)}e.font=.6*v+"px sans-serif",e.fillText(t.h>12?"P.M":"A.M",o.x,.3*r),e.restore(),e.save();var b=[{top:.72,bottom:.24,r:t.sR,bottomWidth:.02,topWidth:.01},{top:.6,bottom:.18,r:t.mR,bottomWidth:.06,topWidth:.03},{top:.4,bottom:.13,r:t.hR,bottomWidth:.045,topWidth:.02}],w=Math.tan(60*Math.PI/180),T=Math.tan(30*Math.PI/180);e.fillStyle=s,b.forEach(function(t){var i=l*t.bottom,n=l*t.bottomWidth/2,r=n/w,o=l*t.top,a=l*t.topWidth/2,s=a/T;e.translate(l,l),e.rotate(t.r),e.beginPath(),e.moveTo(0,i),e.lineTo(-n,i-r),e.lineTo(-a,-o+s),e.lineTo(0,-o),e.lineTo(a,-o+s),e.lineTo(n,i-r),e.lineTo(0,i),e.fill(),e.setTransform(1,0,0,1,0,0)}),e.restore(),e.save(),e.fillStyle="#fff",e.beginPath(),e.arc(o.x,o.y,.02*l,0,2*Math.PI),e.fill(),e.restore(),i.triggerAlarm(t.date),window.requestAnimationFrame(i.draw)},this._canvas=t,this._ctx=t.getContext("2d"),this._width=+t.getAttribute("width")||300,this._height=+t.getAttribute("height")||300;var n={radius:Math.min(this._width,this._height)/2,color:"#9b9b9b"};e&&e.radius&&(e.radius>n.radius||e.radius<=1)&&(e.radius=n.radius),Object.assign(n,e),this._radius=n.radius,this._options=n,window.requestAnimationFrame(this.draw)}return t.prototype.getCoordinate=function(t,e){var i=this._radius;return{x:i+t*Math.sin(e),y:i-t*Math.cos(e)}},t.prototype.getCurrentTime=function(){var t,e=new Date;t=this._timeOffset?new Date(e.getTime()+this._timeOffset):e;var i=[t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()],n=i[0],r=i[1],o=i[2],a=i[3],s=o+a/1e3,l=r+s/60,u=n+l/60,c=[u/12,l/60,s/60].map(function(t){return 2*t*Math.PI});return{hR:c[0],mR:c[1],sR:c[2],date:t,h:n,s:o,m:r}},t.prototype.triggerAlarm=function(t){var e=this,i=this._alarm;if(i&&!(i.length<=0)){var n=[];i.forEach(function(e,i){Math.abs(t.getTime()-e.time.getTime())<100&&n.push({index:i,alarm:e})}),n.forEach(function(t,i){var n=t.index-i;e._alarm.splice(n,n+1),t.alarm.cb()})}},t.prototype.setAlarm=function(t,e){this._alarm||(this._alarm=[]),this._alarm.push({time:t,cb:e})},t.prototype.clearAlarm=function(){this._alarm=[]},Object.defineProperty(t.prototype,"offset",{set:function(t){this._timeOffset=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alarm",{get:function(){return this._alarm},enumerable:!0,configurable:!0}),t}();e.default=n},279:function(t,e,i){i(28),t.exports=i(109)},75:function(t,e){},77:function(t,e,i){"use strict";function n(t){var e=[],i=window.innerWidth,n=window.innerHeight,o=.04*i,a=.06*n,s=.01*i,l=.01*i,u=function(t,e){var i=t.el,r=e.el;r.offsetHeight+r.offsetTop+i.offsetHeight+s+a>n?t.setTopRight(a,e.right+r.offsetWidth+l):t.setTopRight(e.top+r.offsetHeight+s,e.right)};return function(i,n){void 0===n&&(n=t.delay);var s=new r(i);e.length>0?u(s,e[e.length-1]):s.setTopRight(a,o),e.push(s),s.show(),setTimeout(function(){if(s.hide(),e.splice(0,1),e.length>0&&(e[0].setTopRight(a,o),e.length>1))for(var t=1,i=e.length;t<i;t++)u(e[t],e[t-1])},n)}}Object.defineProperty(e,"__esModule",{value:!0}),i(75),e.default=n;var r=function(){function t(t){var e=this;this.show=function(){e._el.classList.add("show")},this.hide=function(){e._el.classList.remove("show"),e._el.classList.add("hide"),setTimeout(function(){document.body.removeChild(e._el)},300)},Object.assign(this,{_msg:t}),this.init()}return t.prototype.init=function(){var t=document.createElement("div");t.classList.add("toast"),t.innerHTML=this._msg,document.body.appendChild(t),this._el=t},t.prototype.setTopRight=function(t,e){var i=this.el;this.top=t,this.right=e,Object.assign(i.style,{top:t+"px",right:e+"px"})},Object.defineProperty(t.prototype,"el",{get:function(){return this._el},enumerable:!0,configurable:!0}),t}()},78:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(77),r=n.default({delay:5e3});e.toast=r}},[279]);