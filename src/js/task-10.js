/* Завдання 10 (виконувати не обов'язково)
Напиши скрипт створення і очищення колекції елементів.
Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. 
Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

! 1) Створи функцію createBoxes(amount), 
? 1a) яка приймає один параметр - число. 
* 1b) Функція створює стільки <div>, скільки вказано в amount 
? 1c) і додає їх у div#boxes.
* 1d) Розміри найпершого <div> - 30px на 30px.
? 1e) Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
* 1f) Всі елементи повинні мати випадковий колір фону у форматі HEX. 
Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

! 2) Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи. */


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const refs = {
  inputAmount: document.querySelector('#controls input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateBtnClick);

function onCreateBtnClick() {
  const amount = refs.inputAmount.value;
    
  createBoxes(amount);
  
  refs.inputAmount.value = null;
  };

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    refs.boxes.insertAdjacentHTML(
      'beforeend',
      `<div style="
        width: ${30 + i * 10}px;
        height: ${30 + i * 10}px;
        background-color: ${getRandomHexColor()};"
      >
      </div>`
    );
  };
};

refs.destroyBtn.addEventListener("click", onDestroyBtnClick);

function onDestroyBtnClick() {
  refs.boxes.innerHTML = '';
};
