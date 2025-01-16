// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// *****  *****
// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// is tarah ke conversions ko aapko avoid karna chahiye aur ye aap ko kabhi bhi confusion main daal sakte hain. Most cases main we avoid these kind of conversions.
// Always remember clean code has the most value aur usi ko hum sab se zyada priority dete hain
// *****  *****

// === strict check (checks the datatype of the operands); == (it converts string automatically to number)

console.log("2" === 2);


// The thing is that there are some inconsistencies in JS thats why people use TS