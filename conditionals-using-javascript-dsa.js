// console.log('hi')

// let units = 2000;
// let amount = 0;
// if(units > 400) {
// 	amount = (units -400)* 10;
// 	units = 400;
// }

// if(units >200 && units <= 400) {
// 	amount += (units -200)* 5;
// 	units = 200;
// }

// amount += units* 3;

// console.log(amount)


let amount = 11376;
let panchSauKeNote = 0;
let doSauKeNote = 0;
let sauKeNote = 0;
let pachasKeNote = 0;
let beesKeNote = 0;
let dusKeNote = 0;
let panchKaSikka = 0;
let doKaSikka = 0;
let ekKaSikka = 0;

if(amount >= 500) {
    panchSauKeNote = Math.floor(amount/500);
    amount = amount%500;
}

if(amount < 500 && amount >= 200){
    doSauKeNote = Math.floor(amount/200);
    amount = amount%200;
}

if(amount < 200 && amount >= 100) {
    sauKeNote = Math.floor(amount/100);
    amount = amount%100;
}

if(amount < 100 && amount >= 50) {
    pachasKeNote = Math.floor(amount/50);
    amount = amount%50;
}

if(amount < 50 && amount >= 20) {
    beesKeNote = Math.floor(amount/20);
    amount = amount%20;
}

if(amount <20 && amount >= 10) {
    dusKeNote = Math.floor(amount/10);
    amount = amount%10;
}

if(amount < 10 && amount >= 5) {
    panchKaSikka = Math.floor(amount/5);
    amount = amount%5;
}

if(amount < 5 && amount >= 2) {
    doKaSikka = Math.floor(amount/2);
    amount = amount%2;
}

if(amount < 2 && amount >=1) {
    ekKaSikka = amount;
}

const paisa = {
    panchSauKeNote,
    doSauKeNote,
    sauKeNote,
    pachasKeNote,
    beesKeNote,
    dusKeNote,
    panchKaSikka,
    doKaSikka, 
    ekKaSikka
}




console.log(paisa)















