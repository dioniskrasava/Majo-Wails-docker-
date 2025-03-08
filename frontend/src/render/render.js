
//import logo from '../assets/images/logo-universal.png';

export function renderApp() {
    document.querySelector('#app').innerHTML = `
      
        <div class="result" id="result">Please enter your name below 👇</div>
        <div class="input-box" id="input">
            <input class="input" id="name" type="text" autocomplete="off" />
            <button class="btn" onclick="greet()">Greet</button>
        </div>
    `;
    document.getElementById('logo').src = logo;
}