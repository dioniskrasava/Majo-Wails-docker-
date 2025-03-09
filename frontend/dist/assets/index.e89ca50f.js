(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();function d(){document.querySelector("#app").innerHTML=`     
<form>
    <!-- \u041F\u0435\u0440\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0422\u0438\u043F \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 -->
    <div class="form-row">
      <label for="activity-type">\u0422\u0438\u043F \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438:</label>
      <select id="activity-type">
        <option value="work">\u0420\u0430\u0431\u043E\u0442\u0430</option>
        <option value="rest">\u041E\u0442\u0434\u044B\u0445</option>
        <option value="sport">\u0421\u043F\u043E\u0440\u0442</option>
      </select>
      <button type="button" id="add-activity">+</button>
    </div>

    <!-- \u0412\u0442\u043E\u0440\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0412\u0440\u0435\u043C\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 -->
    <div class="form-row">
      <label for="start-time">\u0412\u0440\u0435\u043C\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438:</label>
      <input type="text" id="start-time" placeholder="hh:mm:ss" />
      <button type="button" id="set-start-time">*</button>
    </div>

    <!-- \u0422\u0440\u0435\u0442\u044C\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0412\u0440\u0435\u043C\u044F \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 -->
    <div class="form-row">
      <label for="end-time">\u0412\u0440\u0435\u043C\u044F \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438:</label>
      <input type="text" id="end-time" placeholder="hh:mm:ss" />
      <button type="button" id="set-end-time">*</button>
    </div>

    <!-- 4 \u0441\u0442\u0440\u043E\u043A\u0430: \u041E\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F -->
    <div class="form-row">
      <label for="total-time">\u041E\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F:</label>
      <input type="text" id="total-time" placeholder="hh:mm:ss" />
      <button type="button" id="set-total-time">*</button>
    </div>

  </form>
    `,document.addEventListener("DOMContentLoaded",function(){document.getElementById("add-activity").addEventListener("click",function(){alert("\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438")}),document.getElementById("set-start-time").addEventListener("click",function(){const n=new Date,o=String(n.getHours()).padStart(2,"0"),r=String(n.getMinutes()).padStart(2,"0"),i=String(n.getSeconds()).padStart(2,"0");document.getElementById("start-time").value=`${o}:${r}:${i}`}),document.getElementById("set-end-time").addEventListener("click",function(){const n=new Date,o=String(n.getHours()).padStart(2,"0"),r=String(n.getMinutes()).padStart(2,"0"),i=String(n.getSeconds()).padStart(2,"0");document.getElementById("end-time").value=`${o}:${r}:${i}`}),document.getElementById("set-total-time").addEventListener("click",function(){})})}d();
