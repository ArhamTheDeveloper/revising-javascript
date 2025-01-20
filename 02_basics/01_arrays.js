const arr1 = ["arham", 23, true, 48, 100,98,110];
const arr2 = new Array(1, 2, 3, 4, 5, 6, 7);

// Array Methods
// arr1.push("Zoro");
// arr1.pop();
// arr1.unshift("Sanji"); // this method adds a new element in the start of the array by doing so it changes the index of all the other elements
// arr1.shift()
// console.log(arr1.includes("arham"));
// console.log(arr1.indexOf(48));
// console.log(arr1.join());

// slice and splice : So the difference is that splice changes the original array while slice doesn't
console.log("A " , arr1);
const myArr1 = arr1.slice(2,5)
console.log(myArr1);
console.log("A " , arr1);

console.log("B " , arr2);
const myArr2 = arr2.splice(2,3)
console.log(myArr2);
console.log("B " , arr2);




