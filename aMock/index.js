// // You'll be given an array, and array will be sorted and you might have duplicate elements, you need to find the last occurence, if not target -1
// const arr = [3, 4, 4, 5, 5, 7, 8, 9, 13, 13, 14];
// const target = 4;

// function solve(arr, target) {
//     let start = 0;
//     let mid = Math.floor(arr.length / 2);
//     let end = arr.length;
//     console.log(start, mid, end)

//     while (start < end) {
//         console.log('inside while loop')
//         if (arr[mid] > target) {
//             end = mid - 1;
//         } else if (arr[mid] < target) {
//             start = mid + 1;
//         } else if (arr[mid] === target) {
//             return mid;
//         }
//     }

//     return -1;
// }

// const res = solve(arr, target)
// console.log(res)