// console.log("promise");

// const myPromise = new Promise((resolve, reject) => {
//   fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then((response) => response.json())
//     .then((json) => {
//       resolve(json);
//     })
//     .catch((error) => {
//       reject("NotFetched: " + error);
//     });
// });

// function fetchingUrl() {
//   return myPromise;
// }

// async function getAPIData() {
//   try {
//     let data = await fetchingUrl();
//     console.log("Fetched data:", data);
//   } catch (error) {
//     console.log("API call failed:", error);
//   }
// }

// getAPIData();

// // function fetchData() {
// //     return new Promise((resolve, reject) => {

// //     });
// // }

console.log("Start");

const anotherPromise = new Promise((resolve, reject) => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      resolve(data);
    })
    .catch((err) => {
      reject("Error: " + err);
    });
});

const fetchData = () => {
  return anotherPromise;
};

const getData = async () => {
  try {
    let result = await fetchData();
    console.log("Result>>>", result);
  } catch (error) {
    console.log("Error>>>", error);
  }
};

getData();
