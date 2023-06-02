// import { data } from './data.js';
import { getPersons } from './getPerson.js';

//
const input = document.querySelector('#inputSearch');
const cardList = document.querySelector('#cardList');

window.addEventListener('DOMContentLoaded', async () => {
	cardList.innerHTML = 'loading';
	const { data } = await getPersons();

	showListInHtml(data);
});

input.addEventListener('keyup', async (e) => {
	const { data } = await getPersons();

	const dataFilter = data.filter((user) =>
		user.firstname.toLowerCase().includes(input.value.toLowerCase())
	);
	showListInHtml(dataFilter);
});

const createListData = (user = []) => {
	return user
		.map(
			(user) => `

	<div class="max-w-xs rounded overflow-hidden shadow-lg bg-gray-800 text-white">
		<img
			class="w-full h-56 object-cover"
			src="${user.image}"
			alt="${user.firstname}"
		/>
		<div class="px-6 py-4">
			<div class="font-bold text-xl mb-2">${user.firstname} ${user.lastname}</div>
			<p class="text-gray-700 text-white">${user.country}</p>
		</div>
		<div class="px-6 pt-4 pb-2">
			<span
				class="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2"
				>#Etiqueta1</span
			>
			<span
				class="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-white"
				>#Etiqueta2</span
			>
		</div>
		<div class="px-6 py-2 flex justify-center mb-2">
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Ver más
			</button>
		</div>
	</div>
`
		)
		.join('');
};

const showListInHtml = (data_ = []) => {
	const itemString = createListData(data_);
	cardList.innerHTML = itemString;
};
