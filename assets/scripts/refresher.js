//use of map
function transformToObjects(array) {
    return array.map(item => ({ val: item }));
}

console.log(transformToObjects([1, 2, 3])); // [{val: 1}, {val: 2}, {val: 3}]

//array destructuring
const [first, second] = [1, 2];
console.log("First:", first);
console.log("Second:", second);

//object destructuring
const { name:userName, age } = { name: "Alice", age: 30 };
console.log("Name:", userName);
console.log("Age:", age);

//descructuring in function parameters
function displayUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
let user = { name: "Bob", age: 25 }
displayUser(user); // Name: Bob, Age: 25

//spread operator for arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const array = [...arr1, ...arr2];
console.log("Combined Array:", array); // [1, 2, 3, 4, 5]

//spread operator for objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const combinedObj = { ...obj1, ...obj2 };
console.log("Combined Object:", combinedObj); // { a: 1, b: 2, c: 3 }

//spread operator in function calls
function sum(x, y, z) {
    return x + y + z;
}   
const numbers = [1, 2, 3];
console.log("Sum:", sum(...numbers)); // 6

//rest operator in function parameters  
function multiply(factor, ...nums) {
    return nums.map(num => num * factor);
}
console.log("Multiplied:", multiply(2, 1, 2, 3)); // [2, 4, 6]