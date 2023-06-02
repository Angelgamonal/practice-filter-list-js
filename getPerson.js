export const getPersons = async () => {
	const resp = await fetch('https://fakerapi.it/api/v1/persons?_quantity=100');

	return await resp.json();
};
