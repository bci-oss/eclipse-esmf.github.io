(globalThis||window).lunrSiteSearch=function(){const a=document.getElementById("search-script").dataset.siteRootPath||"";var u=document.getElementById("search-input"),c=document.createElement("div");function d(e,t,n){var r,s=[];for(r in e){var a,d=e[r];for(a in d){var i=d[a];i.position&&(i=i.position[0],"title"===a?s=function(t,e,n){var r,s=[],a=n[0],d=n[1],i=document.createElement("span");return i.classList.add("search-result-highlight"),r=t?e.titles.filter(function(e){return e.id===t})[0].text:e.title,i.innerText=r.substr(a,d),n=a+d,e=r.length-1,0===a&&n===e?s.push(i):0===a?(s.push(i),s.push(document.createTextNode(r.substr(d,e)))):n===e?(s.push(document.createTextNode(r.substr(0,a))),s.push(i)):(s.push(document.createTextNode(r.substr(0,a))),s.push(i),s.push(document.createTextNode(r.substr(n,e)))),s}(t,n,i):"text"===a&&(s=function(e,t){var n=[],r=t[0],s=t[1],a=e.text,d=document.createElement("span");d.classList.add("search-result-highlight"),d.innerText=a.substr(r,s);var i=r+s,s=(t=a.length-1)<i+(e=100)?t:i+e,e=r-e<0?0:r-e;return 0===r&&i===t?n.push(d):0===r?(n.push(d),n.push(document.createTextNode(a.substr(i,s)))):i===t?(n.push(document.createTextNode(a.substr(0,r))),n.push(d)):(n.push(document.createTextNode("..."+a.substr(e,r-e))),n.push(d),n.push(document.createTextNode(a.substr(i,s-i)+"..."))),n}(n,i)))}}return s}function i(e,r,s){e.forEach(function(e){var t=e.ref;t.includes("#")&&(n=t.substring(t.indexOf("#")+1),t=t.replace("#"+n,""));var t=r[t],n=d(e.matchData.metadata,n,t);s.appendChild(function(e,t,n){var r=document.createElement("div");r.classList.add("search-result-document-title"),r.innerText=e.title;e=document.createElement("div");e.classList.add("search-result-document-hit");var s=document.createElement("a");s.href=a+t.ref,e.appendChild(s),n.forEach(function(e){s.appendChild(e)});n=document.createElement("div");return n.classList.add("search-result-item"),n.appendChild(r),n.appendChild(e),n.addEventListener("mousedown",function(e){e.preventDefault()}),n}(t,e,n))})}function o(e,t,n){for(;c.firstChild;)c.removeChild(c.firstChild);var r,s;""!==n.trim()&&(s=n,s=0<(e=(r=e).search(s)).length||0<(e=r.search(s+"*")).length?e:e=r.search("*"+s+"*"),(e=document.createElement("div")).classList.add("search-result-dataset"),c.appendChild(e),0<s.length?i(s,t,e):e.appendChild(function(e){var t=document.createElement("div");t.classList.add("search-result-item");var n=document.createElement("div");n.classList.add("search-result-document-hit");var r=document.createElement("strong");return r.innerText='No results found for query "'+e+'"',n.appendChild(r),t.appendChild(n),t}(n)))}return c.classList.add("search-result-dropdown-menu"),u.parentNode.appendChild(c),{init:function(e,t){var r,s,a,d,n=Object.assign({index:e.Index.load(t.index),store:t.store}),i="URLSearchParams"in window&&new URLSearchParams(window.location.search).has("lunr-debug"),t=(r=function(){try{o(n.index,n.store,u.value)}catch(e){i&&console.debug("Invalid search query: "+u.value+" ("+e.message+")")}},s=100,function(){var e=this,t=arguments,n=a&&!d;clearTimeout(d),d=setTimeout(function(){d=null,a||r.apply(e,t)},s),n&&r.apply(e,t)});u.addEventListener("keydown",t),u.addEventListener("keydown",function(e){"Escape"===e.key&&(u.value="")}),u.addEventListener("blur",function(e){for(;c.firstChild;)c.removeChild(c.firstChild)})}}}();