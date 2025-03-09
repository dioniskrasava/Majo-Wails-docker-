export function renderApp() {
    document.querySelector('#app').innerHTML = `     
<form>

<div>
 <label>Добавление активности:</label>
</div>

    <!-- Первая строка: Тип активности -->
    <div class="form-row">
      <label for="activity-type">Тип активности:</label>
      <select id="activity-type">
        <option value="work">Работа</option>
        <option value="rest">Отдых</option>
        <option value="sport">Спорт</option>
      </select>
      <button type="button" id="add-activity">+</button>
    </div>

    <!-- Вторая строка: Время начала активности -->
    <div class="form-row">
      <label for="start-time">Время начала активности:</label>
      <input type="text" id="start-time" placeholder="hh:mm:ss" />
      <button type="button" id="set-start-time">*</button>
    </div>

    <!-- Третья строка: Время окончания активности -->
    <div class="form-row">
      <label for="end-time">Время окончания активности:</label>
      <input type="text" id="end-time" placeholder="hh:mm:ss" />
      <button type="button" id="set-end-time">*</button>
    </div>

    <!-- 4 строка: Общее время -->
    <div class="form-row">
      <label for="total-time">Общее время:</label>
      <input type="text" id="total-time" placeholder="hh:mm:ss" />
      <button type="button" id="set-total-time">*</button>
    </div>

  </form>
    `;

    document.addEventListener('DOMContentLoaded', function () {
        // Кнопка добавления активности
        document.getElementById('add-activity').addEventListener('click', function () {
          alert('Добавление новой активности');
          // Здесь можно добавить логику для добавления новой активности
        });
      
        // Кнопка установки текущего времени для начала активности
        document.getElementById('set-start-time').addEventListener('click', function () {
          const now = new Date();
          const hours = String(now.getHours()).padStart(2, '0');
          const minutes = String(now.getMinutes()).padStart(2, '0');
          const seconds = String(now.getSeconds()).padStart(2, '0');
          document.getElementById('start-time').value = `${hours}:${minutes}:${seconds}`;
        });
      
        // Кнопка установки текущего времени для окончания активности
        document.getElementById('set-end-time').addEventListener('click', function () {
          const now = new Date();
          const hours = String(now.getHours()).padStart(2, '0');
          const minutes = String(now.getMinutes()).padStart(2, '0');
          const seconds = String(now.getSeconds()).padStart(2, '0');
          document.getElementById('end-time').value = `${hours}:${minutes}:${seconds}`;
        });

        // Кнопка установки текущего времени для окончания активности
        document.getElementById('set-total-time').addEventListener('click', function () {
            
          });
      });
}