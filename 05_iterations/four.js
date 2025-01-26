// for in loop

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// const greetings = "Hello world!"
// for (const greet in greetings) {
//     console.log(`Each char is ${greet}`)
// }

// Difference b/w for of and for in loops => https://chat.deepseek.com/a/chat/s/56a17199-4e92-4af3-b975-26da68a71e16
