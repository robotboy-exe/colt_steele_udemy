const cats = ['Blue', 'Fady', 'Colombus']
const dogs = ['Caraca', 'Babylonia']

console.log([...cats, ...dogs]);


const original = [1, 2, { a: 3 }];
const copy = [...original];

console.log(original === copy); // false
console.log(original[2] === copy[2]); // true
