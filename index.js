import{S as d,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="51425733-ebfe71f47e07541f439d053d0",h="https://pixabay.com/api/";function y(i){const t=new URLSearchParams({key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}?${t}`).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()})}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const t=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:s,comments:f,downloads:p})=>`
    <li class="gallery-item">
      <a href="${n}">
        <img src="${o}" alt="${e}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${r}</p>
        <p><b>Views:</b> ${s}</p>
        <p><b>Comments:</b> ${f}</p>
        <p><b>Downloads:</b> ${p}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",t),g.refresh()}function L(){c.innerHTML=""}function w(){l.classList.add("is-visible")}function v(){l.classList.remove("is-visible")}const u=document.querySelector(".form"),S=u.querySelector("input[name='search-text']");u.addEventListener("submit",i=>{i.preventDefault();const t=S.value.trim();if(!t){a.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}L(),w(),y(t).then(o=>{if(o.hits.length===0){a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(o=>{a.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
