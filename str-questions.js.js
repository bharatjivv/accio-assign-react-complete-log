// // // Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. s consists of only lowercase English letters.
 
// // // Input: s = "leetcode"
// // // Output: 0
// // // Explanation:
// // // The character 'l' at index 0 is the first character that does not occur at any other index.
 
 
// // // Input: s = "loveleetcode"
// // // Output: 2
 
 
// // // Input: s = "aabb"
// // // Output: -1


// // // Frontend Task - 33.30%
// // // HTML/CSS Theory Questions - 0.00%
// // // JavaScript Coding Question - 40.00%
// // // JavaScript Async/Promises Theory - 60.00%



// // const s = 'aabb';
// // const myMap = new Map()

// // function repeatedChar(s) {
    
// //     // for(let i=0; i<s.length; i++) {
// //     //     let count = 0;
// //     //     let char = s[i];
        
// //     //     for(let j=0; j<s.length; j++) {
// //     //         if(char == s[j]) count++;
// //     //     }
        
// //     //     if(count == 1) return i;
// //     // }
// //     // return -1;
    
    
    
// //     for(let i=0; i<s.length; i++) {
// //         let char =  s[i];

// //         if(myMap.has(char)) {
// //             // already rakha hua hai character value bada do
// //             myMap.set(char, myMap.get(char) + 1);
// //         }
// //         else {
// //             myMap.set(char, 1)
// //         }
// //     }
    
    

    
    
// // }

// // console.log(repeatedChar(s))

// // // console.log("Start")
// // // setTimeout(function() {
// // //     console.log("TimeOut")
// // // }, (0));

// // // Promise.resolve().then(() => {
// // //     console.log('Promise')
// // // })
// // // console.log('End')




// const s = 'loveleetcode';

// function uniqueChar(s) {
//     const myMap = new Map();
    
//     for(let i=0; i<s.length; i++) {
//         let char = s[i]
//         if(myMap.has(char)) {
//             myMap.set(char, myMap.get(char) + 1)
//         }
//         else {
//             myMap.set(char, 1)
//         }
        
//     }
    
//     for(let [key, value] of myMap) {
//         if(value === 1){
//             console.log(key)
//             console.log(s.indexOf(key))
//             return s.indexOf(key)
//         }
//     }
//     return -1;
// }


// uniqueChar(s)

strs = ["eat","tea","tan","ate","nat","bat"]

var groupAnagrams = function (strs) {
    const map = new Map();

    for (let str of strs) {
        const key = str.split('').sort().join('');

       if(!map.has(key)){
           map.set(key, [])
       }
       map.get(key).push(str)
    }

    // console.log(Array.from(map.values()));
    console.log(map)

};


groupAnagrams(strs)