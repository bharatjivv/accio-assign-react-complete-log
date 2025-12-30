// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function() {
//     console.log('async operation completed');
//     resolve();
//   }, 2000);
// });

// promiseOne.then(() => {
//   console.log('Promise resolved!');
// });



const promiseOne = new Promise(function (resolve, reject) {
	setTimeout(function() {
		console.log('async operation completed')
		resolve()
	}, (1000));
})

promiseOne.then(() => {
	console.log('Promise resolved!');
});


new Promise(function (resolve, reject) {
	setTimeout(function () {
		console.log('choddiya promiseTwo')
		resolve()
	}, 2000)
}).then(function () {
	console.log('promisetwo resolved')
})




const promiseThree = new Promise(function (resolve, reject) {
	setTimeout(function() {
		console.log('data fetched');
		resolve([ {username: 'chai', email: 'chai@chaiaurcode.com'}])
	},3000)
})


promiseThree.then(function (user) {
	console.log(user)
})


const promiseFour = new Promise(function (resolve, reject) {
	setTimeout(function () {
		let error = false;
		if(!error) {
			resolve( {username: 'abc', password: 123})
			resolve()
		} else {
			reject('Something went Wrong')
		}
	}, 4000)
})


promiseFour.then(function (user) {
    console.log('user ------', user)
    return user.username;
})
.then(function (userKaNaam) {
    console.log(userKaNaam)
})
.catch(function (err) {
    console.log(err)
})
.finally(function () {
    console.log('jo hota hai acche ke liye hi hota hai')
})



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if(!error) {
            resolve({username: 'topG', password: 'tate@talisman'})
        } else {
            reject('Something went wrong')
        }
    }, 5000)
})




// promiseFive.then().catch().finally()

async function resolvePromiseFive() {
    try{
    const response = await promiseFive
    console.log(response.username);
        
    } catch(e) {
        console.log('Something went wrong', e)
    }
}

resolvePromiseFive()

