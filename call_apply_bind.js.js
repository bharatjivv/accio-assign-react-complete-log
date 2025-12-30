const cache = new Map();

async function fetchWithCache(url) {
	if (cache.has(url)) {
		console.log("Returning from cache...");
		return cache.get(url);
	}

	console.log("Fetching from network...");
	const response = await fetch(url);
	const data = await response.json();

	cache.set(url, data);
	return data;
}



// Usage
(async () => {
	const URL = 'https://dummyjson.com/users';
	const users1 = await fetchWithCache(URL);
	const users2 = await fetchWithCache(URL); // comes from cache
//   for(let elem of cache) {
//     console.log(elem)
// }
})();


function outer() {
	let count = 0;
	return function inner() {
		count++;
		console.log(count);
	};
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3


function salaam (city) {
	console.log(`Salaam $ {this.name} bhai!!!!!!`, city, "city!!!!")
}

const user = {name: 'Bharat'};

salaam.call(user, 'Bhopal');














