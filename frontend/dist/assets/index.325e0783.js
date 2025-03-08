(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function s(){document.querySelector("#app").innerHTML=`
      
        <div class="result" id="result">Please enter your name below \u{1F447}</div>
        <div class="input-box" id="input">
            <input class="input" id="name" type="text" autocomplete="off" />
            <button class="btn" onclick="greet()">Greet</button>
        </div>
    `,document.getElementById("logo").src=logo}function u(r){return window.go.main.App.Greet(r)}s();let l=document.getElementById("name"),d=document.getElementById("result");l.focus();window.greet=function(){let r=l.value;if(r!=="")try{u(r).then(n=>{d.innerText=n}).catch(n=>{console.error(n)})}catch(n){console.error(n)}};
