let array = ['Apple', 'Banana', 'Cherry'];

array.pop();
console.log(array)
array.push('Orange')
console.log(array)
array.shift();
console.log(array)
array.unshift('Apple');
console.log(array)
// push
// pop
// shift 
// unshift
// forEach
// map 

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
 
let cube = [
    [
        [1, 2, 3],

        [4, 5, 6],

        [7, 8, 9]
    ],
    [
        [11, 12, 13],

        [14, 15, 61],

        [17, 18, 19]
    ],
    [
        [21, 22, 23],

        [24, 25, 26],

        [27, 28, 29]
    ],
];
const result = cube[0][1][2]
console.log(result)