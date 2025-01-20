// Shallow copy and Deep copy of Arrays and Objects.
// Shallow copy has the same reference point as the original so any changes made to the copy will affect the original one too.Whereas Deep copy do not share the same reference point so changes won't reflect on the original.

// Shallow Copy vs. Deep Copy (Arrays and Objects): CHATGPT VERSION

//     A shallow copy creates a new object or array, but it copies only the top-level elements. If the original object or array contains nested objects or arrays, both the original and the shallow copy will still share references to those nested elements. This means changes made to nested elements in the copy will also affect the original.

//     A deep copy, on the other hand, creates an entirely new and independent copy of the original object or array, including all nested elements. Changes made to the deep copy do not affect the original, as they do not share any reference points.

const arr1 = ["arham", 23, true, 48, 100, 98, 110];
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
console.log("A ", arr1);
const myArr1 = arr1.slice(2, 5);
console.log(myArr1);
console.log("A ", arr1);

console.log("B ", arr2);
const myArr2 = arr2.splice(2, 3);
console.log(myArr2);
console.log("B ", arr2);

// https://chatgpt.com/share/678de4ca-9588-800e-ae48-a8f7c28de01c
// Most used Array Methods : https://chatgpt.com/c/678e5b10-c26c-800b-bd58-53e300106c16
// Splice join aur reverse array ke methods hain na ke strings ke
