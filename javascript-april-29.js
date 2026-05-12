// const num = 12345

// function findlen (num) {
//     console.log(num.toString().length)
// }

// findlen(num)




// "use strict";
// const num = 12345;

// function findLen(num) {
//     let count = 1;
//     while(num >= 10) {
//         num = parseInt(num/10);
//         // console.log(num)
//         count++;
//     }
//     console.log(count);
// }

// findLen(num)



// const str = 'Welcome to this Javascript Guide!'

// function reverseWords(str) {
//     const streeng = str.split(' ')
//     const result = streeng.map(word => 
//         word.split('').reverse().join('')
//     );
//     console.log(result.join(' '));
// }

// reverseWords(str)




// let s1 = 'helloworld'
// let s2 = 'hello'
// function removeDuplicatesFromStr(s) {
//     const mySet = new Set();
//     for(let char of s) {
//         mySet.add(char);
//     }
//     // console.log(mySet)
//     return [...mySet].join('')
    
// }

// const newStr1 = removeDuplicatesFromStr(s1);
// const newStr2 = removeDuplicatesFromStr(s2);

// console.log(newStr2, newStr1)




// function removeDuplicates(str) {
//   let seen = new Array(256).fill(false);
//   let result = '';

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     const code = str.charCodeAt(i);

//     console.log(`Checking '${char}' (code: ${code})`);

//     if (!seen[code]) {
//       console.log(`→ Not seen, adding to result`);
//       result += char;
//       seen[code] = true;
//     } else {
//       console.log(`→ Already seen, skipping`);
//     }

//     console.log(`Current result: "${result}"`);
//     console.log('------------------------');
//   }

//   return result;
// }

// const newStr = removeDuplicates("Bharat Jiwnani is the Top G");
// console.log(newStr)





// let vow = ['a', 'e', 'i', 'o', 'u'];

// let capVow = vow.map((letter) => letter.toUpperCase());

// console.log(vow);
// console.log(capVow);




// const str = 'abcdefghijklmnopqrstuvwxyz';
// let result = '';
// for(let char of str) {
//     const nos = char.charCodeAt();
    
//     // shift, wrap and push
//     const newChar = (((code-97) + k) % 26) + 97;
//     // const charact = String.fromCharCode(nos+2)
//     // console.log(charact)
    
//     if(nos)
//     result += charact
// }

// console.log(result)





const s = 'how are you';

const newS = (s.split(' ').reverse().join(' '))
console.log(newS)