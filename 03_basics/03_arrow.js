// "use strict";
const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(this);
    // console.log(this);
  },
  hello: () => {
    console.log(this);
  },
};
// user.welcomeMessage();
// user.hello();
// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
// console.log(globalThis);

// function chai() {
//   // let username = "hitesh"
//   console.log(this);
// }

// chai()
// **** To know more about what this keyword returns as the global object visit: https://chat.deepseek.com/a/chat/s/66ff504d-e66f-475c-be63-65185a34e73c

// const chai = function () {
//     // let username = "hitesh"
//     console.log(this);
// }

// const chai = () => {
//   // let username = "hitesh";
//   console.log(this);
// };

// chai();

/* Without Strict Mode

    Browser:

        Function declaration and expression: this refers to window.

        Arrow function: this refers to window.

    Node.js:

        Function declaration and expression: this refers to global.

        Arrow function: this refers to module.exports (an empty object by default).

With Strict Mode

    Browser:

        Function declaration and expression: this is undefined.

        Arrow function: this refers to window.

    Node.js:

        Function declaration and expression: this is undefined.

        Arrow function: this refers to module.exports (an empty object by default).

  Visit this link for more info about this keyword arrow functions behavior lexical scope : https://chat.deepseek.com/a/chat/s/b8371b94-91b2-4733-9ce4-b414542a70f6
 */




  
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ({ username: "hitesh" });
// console.log(addTwo(3, 4))
// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()
