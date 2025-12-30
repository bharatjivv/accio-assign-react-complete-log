// let a = '5'

// console.log(typeof +a)
// console.log(typeof null)
// console.log(typeof NaN)
// console.log(typeof true)


// function greet(name) {
//     console.log(`Hi ${name}, welcome to ${this.city}`)
// }


// greet.apply({city: 'Bhopal'}, ['Suresh'])


// let obj = {
//     name: 'Bharat',
//     city: 'Bhopal',
//     age: 24,
//     printName : function () {
//         console.log(`Hi I'm ${this.name} and my city is ${this.city}`)
//     }
// }

// const Bharat = new obj()
// Bharat.printName()

// obj.printName()


// const anotherusr = {
// 	id: 1,
//     name: 'Ram',
//     city: 'Ayodhya',
// 	outer: function () {
// 		const greete = ()  => {
// 			console.log(this)
// 		}
//         greete()
// 	}
// }

// anotherusr.outer()


// const welcome = {
//     name : "Ankit",
//     city : 'Bhopal',
//     greet() {
//         console.log(`Welcome, ${this.name} !!!`)
//     }
// }

// function gudmrng () {
//     console.log(`Morning, ${this.name} !!!`)
// }

// welcome.greet()

// gudmrng.call(welcome)

// const person1 = {name: "Bharat"}
// const person2 = {name: "Ankit"}

// function sayName () {
//     console.log(`Hi, ${this.name}`)
// }


// const boundOne = sayName.bind(person1)
// const boundTwo = sayName.bind(person2)
// once again binding a binded function is not possible therefore it will
// give result of first bind only whereas binding two constants with two different objects is possible
// boundOne()
// boundTwo()


















