// https://chatgpt.com/c/678bb356-b57c-800b-9445-6b6a650bd5ea

let num1 = 245.1443298;
let num2 = 378.459833;
let num3 = 0.0047;
let num4 = 3000000

// Number Object / Instance Methods
// console.log(num1.toString().length);
console.log(num1.toPrecision(4)); // this shows significant figures in the whole number
console.log(num3.toFixed(3)); // this shows the digits after the decimal point
// console.log(num3.toPrecision(2));
// console.log(num4.toLocaleString('ur-PK'));

// Number Class / Constructor Methods
// console.log(Number.isInteger(num1));
// console.log(Number.isSafeInteger(num4));
// console.log(Number.isFinite(num4));

// +++++++++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++
// console.log(Math.abs(-98));
// console.log(Math.round(-84.57));
// console.log(Math.ceil(84.0001));
// console.log(Math.floor(84.99999));
// console.log(Math.min(3,4,2,0.09));
// console.log(Math.max(3,4,2,0.09));

console.log(Math.random()); // https://chatgpt.com/c/678bca35-88e8-800b-9d8a-ff6014663fbc
// 22:29 actually here , the plus one is  added to include the maximum number(20) into the range .. Zero case is already handled by adding +min after it ...   For example  let's say the random returns 0.99999 then multiply it with 11(20-10+1)..  , we will get 10.989.... take the floor value of this which will be 10 and now add it with min value which is 10 so overall answer would be 20(the ending range). That's the maximum case..  
// Similarly if random returns 0.0122... then everything will get 0 in the left and then adding min(10) to 0 will give us 10 which is the starting range..
  

