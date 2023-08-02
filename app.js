// Compare two objects for equality in JavaScript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };

const isEqual = JSON.stringify(obj1) === JSON.stringify(obj2);
console.log(isEqual); // true (content is the same)
