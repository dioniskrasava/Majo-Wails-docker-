import Swal from "sweetalert2";

export function renderApp() {
  document.querySelector("#app").innerHTML = `     
<form>

<div>
 <label id="top-label">Добавление активности:</label>
</div>

    <!-- Первая строка: Тип активности -->
    <div class="form-row">
      <label for="activity-type">Тип :</label>
      <select id="activity-type" class="select-field">
        <option value="work">Работа</option>
        <option value="rest">Отдых</option>
        <option value="sport">Спорт</option>
      </select>
      <button type="button" id="add-activity">+</button>
    </div>

    <!-- Вторая строка: Время начала активности -->
    <div class="form-row">
      <label for="start-time">Начало :</label>
      <input type="text" id="start-time" placeholder="hh:mm:ss" />
      <button type="button" id="set-start-time">*</button>
    </div>

    <!-- Третья строка: Время окончания активности -->
    <div class="form-row">
      <label for="end-time">Конец :</label>
      <input type="text" id="end-time" placeholder="hh:mm:ss" />
      <button type="button" id="set-end-time">*</button>
    </div>

    <!-- 4 строка: Общее время -->
    <div class="form-row">
      <label for="total-time">Общее время :</label>
      <input type="text" id="total-time" placeholder="hh:mm:ss" />
      <button type="button" id="set-total-time">*</button>
    </div>

     <!-- 5 строка: Комментарии -->
    <div class="form-row">
      <label for="comment">Комментарий :</label>
      <textarea id="comment" name="comment-activity" rows="2" cols="40"  placeholder="Comments"></textarea>
     
    </div>

    <!-- 6 строка: Кнопка добавления -->
    <div class="form-row">
       <button type="button">Добавить запись</button>
    </div>

  </form>
    `;

  document.addEventListener("DOMContentLoaded", function () {
    // Кнопка добавления активности
    document
      .getElementById("add-activity")
      .addEventListener("click", function () {
        Swal.fire({
          title: "Добавление новой активности",
          text: "Активность успешно добавлена!",
          icon: "success",
          customClass: {
            popup: "custom-popup", // Класс для окна
            title: "custom-title", // Класс для заголовка
            content: "custom-content", // Класс для контента
          },
          confirmButtonText: "ОК",
        });
        // Здесь можно добавить логику для добавления новой активности
      });

    // Кнопка установки текущего времени для начала активности
    document
      .getElementById("set-start-time")
      .addEventListener("click", function () {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        document.getElementById(
          "start-time"
        ).value = `${hours}:${minutes}:${seconds}`;
      });

    // Кнопка установки текущего времени для окончания активности
    document
      .getElementById("set-end-time")
      .addEventListener("click", function () {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        document.getElementById(
          "end-time"
        ).value = `${hours}:${minutes}:${seconds}`;
      });

    // Кнопка установки текущего времени для окончания активности
    document
      .getElementById("set-total-time")
      .addEventListener("click", function () {
        // Получаем значения времени начала и окончания
        const startTime = document.getElementById("start-time").value;
        const endTime = document.getElementById("end-time").value;

        // Проверяем, что оба поля заполнены
        if (!startTime || !endTime) {
          Swal.fire({
            icon: "error",
            title: "Ошибка",
            text: "Заполните оба поля времения!",
            customClass: {
              popup: "custom-popup", // Класс для окна
              title: "custom-title", // Класс для заголовка
              content: "custom-content", // Класс для контента
            },
          });
          return;
        }

        // Валидация (проверка) формата времени:
        const timePattern = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
        if (!timePattern.test(startTime)){
          Swal.fire({
            icon: "error",
            title: "Ошибка",
            text: "Некорректный формат времени начала.",
            customClass: {
              popup: "custom-popup", // Класс для окна
              title: "custom-title", // Класс для заголовка
              content: "custom-content", // Класс для контента
            },
          });
          return;
        }
        if (!timePattern.test(endTime)) {
          Swal.fire({
            icon: "error",
            title: "Ошибка",
            text: "Некорректный формат времени окончания.",
            customClass: {
              popup: "custom-popup", // Класс для окна
              title: "custom-title", // Класс для заголовка
              content: "custom-content", // Класс для контента
            },
          });
          return;
        }

        // Преобразуем время в объекты Date
        const startDate = new Date(`1970-01-01T${startTime}Z`);
        const endDate = new Date(`1970-01-01T${endTime}Z`);

        // Вычисляем разницу в миллисекундах
        const diffInMs = endDate - startDate;

        // Если разница отрицательная, значит end-time меньше start-time
        if (diffInMs < 0) {
          Swal.fire({
            icon: "error",
            title: "Ошибка",
            text: "Время окончания не может быть меньше времени начала",
            customClass: {
              popup: "custom-popup", // Класс для окна
              title: "custom-title", // Класс для заголовка
              content: "custom-content", // Класс для контента
            },
          });
          return;
        }

        // Преобразуем разницу в формат hh:mm:ss
        const diffInSeconds = Math.floor(diffInMs / 1000);
        const hours = Math.floor(diffInSeconds / 3600);
        const minutes = Math.floor((diffInSeconds % 3600) / 60);
        const seconds = diffInSeconds % 60;

        // Форматируем результат
        const formattedTime = `${String(hours).padStart(2, "0")}:${String(
          minutes
        ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        // Записываем результат в поле total-time
        document.getElementById("total-time").value = formattedTime;
      });
  });
}
