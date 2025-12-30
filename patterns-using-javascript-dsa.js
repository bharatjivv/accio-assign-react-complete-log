// let random = Math.floor(Math.random() * 100) + 1

// console.log(random)

// let guess = -1


// while(guess !== random) {
//     // guess = Number(prompt('Guess the number'));

//     if(guess < random) {
//         console.log('Think Big!!!')

//     } else if(guess > random ) {
//         console.log('Too high, get a bit grounded')
//     } else {
//         // congrats guessed it right
//         console.log('You won p')
//     }
// }

// process.stdout.write('*')
// process.stdout.write('*')
// process.stdout.write('*')
// process.stdout.write('*')
// process.stdout.write('*')


function pattern (n) {
// 	for(let j=0; j<n; j++) {
// 		for(let i=0; i<n; i++) {
// 			process.stdout.write('* ')
// 		}
// 		 process.stdout.write('\n')
// 	}

    // for(let i=0; i<n; i++) {
    //     let ascii = 65;
    //     for(let j=0; j<i+1; j++) {
    //         process.stdout.write(String.fromCharCode(ascii) + " ")
    //         ascii++;
    //     }
    //     process.stdout.write('\n');
    // }
    
    
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=n-i+1; j++) {
            process.stdout.write('* ')
        }
        console.log()
    }
}


pattern(5)











