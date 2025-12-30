// const arr = [1, 2, 3, 4, 5, 5, 5, 1, 1, 2]
// const set = new Set(arr)

// set.add(15)
// set.add('6')
// set.add({channelName: "Javascript Mastery"})
// set.add([1, 2, 3])
// set.add([1, 2, 3])
// set.add({channelName: "Javascript Mastery"}),
// set.add(15)

// const newArr = [...set]

// console.log(set, typeof set)
// console.log('newArr', newArr)
// newArr.push(15)
// console.log(newArr)

// const anotherSet = new Set([...newArr])
// console.log('anotherset', anotherSet)


const myMap = new Map([])
myMap.set(1, 2)
const objKey = { id: 1 };
myMap.set(objKey, 'some value');
console.log(myMap)