!function(){if(!window.__audioEyeInitialized){window.__audioEyeInitialized=!0;var e=window.document,a=e.addEventListener||e.attachEvent,t=e.removeEventListener||e.detachEvent,n=e.addEventListener?"DOMContentLoaded":"onreadystatechange",d=window.localStorage.getItem("aeHostOverride");readyCallback=function(){t.call(e,n,readyCallback,!1);var a=e.createElement("script"),i=window.__AudioEyeSiteHash,o=window.location.hostname;a.src=[d||"https://wsv3cdn.audioeye.com","/bootstrap.js?",i?"h="+i:"d="+o].filter(Boolean).join(""),a.type="text/javascript",a.setAttribute("async",""),e.getElementsByTagName("body")[0].appendChild(a)},"loading"!==e.readyState?readyCallback():a.call(e,n,readyCallback,!1)}}();