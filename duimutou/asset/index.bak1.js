/*! 2016 Baidu Inc. All Rights Reserved */
define("index.bak1",["require","./create"],function(require){function e(e){e.stopPropagation(),e.preventDefault(),a.style.display="none",l.style.display="block"}function t(e){var t=e.target||e.srcElement;t.parentNode.removeChild(t)}function n(e){function n(e,n,r,i){var s=document.createElement("div");s.className="break-branch down",s.style.marginLeft=u+p+"px",s.style.width=n+"px",s.style.top=r+"px",i=i||"left";var a="";if("left"===i)a='<div class="branch-left branch-left1"></div><div class="branch-middle branch-middle1" style="width: '+n+'px;"></div>';else a='<div class="branch-middle branch-middle1" style="width: '+n+'px;"></div><div class="branch-right branch-right1" style="margin-left: '+n+'px"></div>';s.innerHTML=a,s.addEventListener("webkitAnimationEnd",t),s.addEventListener("animationend",t),e.parentNode.appendChild(s)}function n(e,n,r,i){var s=document.createElement("div");s.className="break-branch down",s.style.marginLeft=-h-n+"px",s.style.width=n+"px",s.style.top=r+"px",i=i||"left";var a="";if("left"===i)a='<div class="branch-left branch-left1"></div><div class="branch-middle branch-middle1" style="width: '+n+'px;"></div>';else a='<div class="branch-middle branch-middle1" style="width: '+n+'px;"></div><div class="branch-right branch-right1" style="margin-left: '+n+'px"></div>';s.innerHTML=a,s.addEventListener("webkitAnimationEnd",t),s.addEventListener("animationend",t),e.parentNode.appendChild(s)}e.stopPropagation(),e.preventDefault();var i=document.querySelector(".first"),a=window.getComputedStyle(i).transform||window.getComputedStyle(i).webkitTransform,o=0,l=a.match(/matrix\(1, 0, 0, 1, (.*),[\s\S]*/);if(l)o=l[1];i.classList.remove("swing");var p=o-h|0,m=i.style;if(p>-h){m.marginLeft=p+"px",m.transform="translateY(23px)",m.webkitTransform="translateY(23px)",i.classList.remove("first");var g=0;if(p>-h)g=s(p- -h);else g=s(-h-p);u-=g,c=parseInt(m.top)+f,r(c-d,u),m.width=u+"px";for(var v=i.childNodes,b=v.length,y=-1;++y<b;){var w=v[y];if(w.classList.contains("branch-middle"))w.style.width=u+"px";if(w.classList.contains("branch-right"))w.style.marginLeft=u+"px"}n(i,g,parseInt(m.top,10)+23,"right")}else{m.marginLeft=p+"px",m.transform="translateY(23px)",m.webkitTransform="translateY(23px)",i.classList.remove("first");var g=0;if(p>-h)g=s(p- -h);else g=s(-h-p);u-=g,c=parseInt(m.top)+f,r(c-d,u),m.marginLeft=p+g+"px";for(var v=i.childNodes,b=v.length,y=-1;++y<b;){var w=v[y];if(w.classList.contains("branch-middle"))w.style.width=u+"px";if(w.classList.contains("branch-right"))w.style.marginLeft=u+"px"}n(i,g,parseInt(m.top,10)+23)}}var r=require("./create"),i=document,s=Math.abs,a=i.querySelector(".guide-tip"),o=i.querySelector(".start"),l=i.querySelector(".game-content"),c=0,u=260,f=23,d=40,h=135,exports={};return exports.init=function(){o.addEventListener(globalData.touchStartEvent,e),document.body.addEventListener(globalData.touchStartEvent,n),c=document.querySelector(".branch-item").offsetTop,r(c-d,u)},exports});