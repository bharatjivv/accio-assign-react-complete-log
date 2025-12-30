class Bharat {
	name;
	age;
	bodycount;
	sex;

	constructor(name) {
		this.name = name;
	}

	intro() {
		console.log(`Im Top G, $ {this.name}`)
	}
}

class heros extends Bharat {
	superpower;

	constructor(name, superpower) {
		super(name);
		this.superpower = superpower;
	}

	vroom () {
		console.log(`I'm ${this.name} and my superpower is ${this.superpower}`)
	}
}
const introduc = new Bharat("Bharat Jiwnani")
introduc.intro()



const son = new heros('g', 'kickboxing')
son.vroom()


const printFn = () => {
	console.log('chal gayaaaaaaaaaaa')
}

printFn()


const BASE_URL = 'https://dummyjson.com'
                 const PARAMS = 'users'

const getData = async () => {
	let dataOfUsers;
	try {
		const res = await fetch(`$ {BASE_URL}/$ {PARAMS}`);
		const data = await res.json();
		dataOfUsers = [...data.users]
// 		const names = data.users.map((name) => `${name.firstName} ${name.lastName}`)
// 		console.log(names)
		              const coordinates = data.users.address((add) => add.coordinates);
		console.log('coordinates', coordinates);

	} catch (e) {
		console.log(e.message);
	}
	console.log('dataOfUsers',JSON.stringify(dataOfUsers))

}

getData();









