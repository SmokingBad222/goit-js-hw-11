import{a as d,S as m,i as a}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y="51425733-ebfe71f47e07541f439d053d0",h="https://pixabay.com/api/";async function g(s){const o={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"};try{return(await d.get(h,{params:o})).data.hits}catch(t){throw console.error("Помилка під час запиту зображень:",t.message),t}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const o=s.map(({webformatURL:t,largeImageURL:n,tags:e,likes:r,views:i,comments:f,downloads:p})=>`
    <li class="gallery-item">
      <a href="${n}">
        <img src="${t}" alt="${e}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${r}</p>
        <p><b>Views:</b> ${i}</p>
        <p><b>Comments:</b> ${f}</p>
        <p><b>Downloads:</b> ${p}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),b.refresh()}function v(){c.innerHTML=""}function q(){l.classList.add("is-visible")}function S(){l.classList.remove("is-visible")}const u=document.querySelector(".form"),w=u.querySelector("input[name='search-text']");u.addEventListener("submit",s=>{s.preventDefault();const o=w.value.trim();if(!o){a.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}v(),q(),g(o).then(t=>{if(t.length===0){a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(t)}).catch(t=>{a.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
