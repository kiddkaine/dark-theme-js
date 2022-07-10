// Инициализация DOM

const body = document.querySelector('body');
const button = document.querySelector('#button');
const block = document.querySelectorAll('.block');
const blockTitle = document.querySelectorAll('.block__title');
const blockText = document.querySelectorAll('.block__text');
const title = document.querySelector('#title');
const input = document.querySelector('#input');

// Стрелочная функция для input

const inputHandler = () => title.innerText = input.value;

// События при клике на кнопку

button.onclick = () => {
	body.classList.toggle('dark-theme-body');

	button.classList.toggle('dark-theme-button');

	title.classList.toggle('dark-theme-title');

	input.classList.toggle('dark-theme-input');
	
	block.forEach((item) => {
		item.classList.toggle('dark-theme-block');
	});

	blockTitle.forEach((item) => {
		item.classList.toggle('dark-theme-block__title');
	});

	blockText.forEach ((item) => {
		item.classList.toggle('dark-theme-block__text');
	});
}

// Вызов стрелочной функции (меняет текст в заголовке на значения прописанные в input)

input.addEventListener('input', inputHandler);