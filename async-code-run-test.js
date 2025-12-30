// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C");
// });

// console.log("D");



// console.log("Start");

// Promise.resolve()
//   .then(() => {
//     console.log("1");
//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log("2");
//   });

// console.log("End");





// async function test() {
//   console.log("X");

//   await Promise.resolve();
//   console.log("Y");

//   Promise.resolve().then(() => console.log("Z"));
// }

// test();
// console.log("W");





// setTimeout(() => console.log("T1"), 10);
// setTimeout(() => console.log("T2"), 0);
// setTimeout(() => console.log("T3"), 5);

// console.log("Now");





// console.log("start");

// setTimeout(() => console.log("timeout"), 0);

// for (let i = 0; i < 3; i++) {
//   console.log("loop", i);
// }

// console.log("end");











// async function foo() {
//   console.log(1);
//   await bar();
//   console.log(2);
// }

// async function bar() {
//   console.log(3);
// }

// console.log(4);
// foo();
// console.log(5);

// 4
// 1
// 2
// 3
// 5





setTimeout(() => {
  Promise.resolve().then(() => console.log("A"));
  console.log("B");
}, 0);

Promise.resolve().then(() => console.log("C"));
console.log("D");






