import { data } from './data.js';

const input = document.querySelector('#input');

window.addEventListener('DOMContentLoaded', () => {
	console.log(input.value);
});

input.addEventListener('keyup', (e) => {
	console.log(input.value);
});

console.log(data);
