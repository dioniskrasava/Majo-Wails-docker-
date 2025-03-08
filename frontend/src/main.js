import './style.css';
import './app.css';
import { renderApp } from './render/render.js'; // Импортируем функцию рендеринга
import { Greet } from '../wailsjs/go/main/App';

// Отрисовываем HTML
renderApp();

// Находим элементы после отрисовки
let nameElement = document.getElementById("name");
let resultElement = document.getElementById("result");

// Фокусируемся на поле ввода
nameElement.focus();

// Функция greet
window.greet = function () {
    let name = nameElement.value;

    if (name === "") return;

    try {
        Greet(name)
            .then((result) => {
                resultElement.innerText = result;
            })
            .catch((err) => {
                console.error(err);
            });
    } catch (err) {
        console.error(err);
    }
};