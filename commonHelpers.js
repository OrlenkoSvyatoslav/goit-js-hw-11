import{i as p,S as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function g(){const o="42577759-46afea0faf18c5517840853c6",r="https://pixabay.com/api/?key=",i=c.value,s=r+o+"&q="+i+"&image_type=photo&orientation=horizontal&safesearch=true";return fetch(s).then(e=>{if(!e.ok)throw new Error(`Error with status ${e.status}`);return e.json()}).catch(e=>{console.log(e)})}function y(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:f,downloads:m})=>`<li class="gallery-item">
                    <a href="${s}">
                        <img class="gallery-image"
                            src="${i}" 
                            alt="${e}" />
                    </a>
                    <ul class="image-info">
                        <li class="image-info-item">Likes<p class="info">${t}</p></li>
                        <li class="image-info-item">Views<p class="info">${n}</p></li>
                        <li class="image-info-item">Comments<p class="info">${f}</p></li>
                        <li class="image-info-item">Downloads<p class="info">${m}</p></li>
                    </ul>
                </li>`).join("");a.innerHTML=r,u.classList.remove("loader")}const a=document.querySelector(".gallery"),l=document.querySelector(".form"),c=document.querySelector(".input-value-js"),u=document.querySelector(".form-container div");l.addEventListener("submit",h);function h(o){o.preventDefault(),a.innerHTML="",c.value.trim()!==""&&(u.classList.add("loader"),g().then(r=>{r.total===0&&p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),y(r.hits),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}),l.reset())}
//# sourceMappingURL=commonHelpers.js.map
