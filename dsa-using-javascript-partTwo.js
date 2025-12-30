console.log('hi')

// conditionals - if, else

// let ans = Number(prompt('Whats your age'));

// let amount = Number(prompt('whats the final amount '))

// if(amount > 0 && amount <= 5000) {
//     console.log(amount)
// } else if(amount > 5000 && amount <= 7500) {
//     amount = amount - Math.floor((5*amount)/10)
// } else if(amount > 7500 && amount < 10000){
//     amount  = amount - Math.floor((10*amount)/100)
// } else {
//     amount = amount - Math.floor((15*amount)/100)
// }

// let unit = Number(prompt('how many units'))

// ternary operator  ? : 

// let units = 1000
// console.log(units)

// let amount = 0;

// if(units > 400) {
//     amount = Math.floor(units/400) * 10;
//     units = units%400;
// }

// console.log(amount)

// let n = 1230;
// let counter = 0;

// while(n%10 === 0 ) {
//     counter++;
//     n = n/10;
// }
// return counter;
// console.log(counter)


// 0 - 100 -> 5 per units
// 100 - 200 -> 10 per units
// 200 - 400 -> 20 per units


let units = 750;
let amount = 0;

if(units > 400) {
    amount = (units- 400) * 13;
}

if (units > 200 && units <= 400) {
    amount += (units -200) * 8;
    units = 200
}


if(units > 100 && units<= 200) {
    amount += (units - 100) * 6;
    units = 100
}

amount += units*4;

console.log(amount)










