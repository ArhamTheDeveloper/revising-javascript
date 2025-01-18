// always use template literals : its modern way of writing string called string interpolation. Do not use + or , to join strings.

const url = "https://github.com/arham%20developer";

// Here is another way of declaring strings
const gameName = new String("       Joyboy Is   Luffy     ");
console.log(gameName); // [String: 'Joyboy'] This is the result I got in nodeJs

/* This is the result I got in console of browser
String { "Joyboy" }
  0: "J"
  1: "o"
  2: "y"
  3: "b"
  4: "o"
  5: "y"
  length: 6 
  <primitive value>: "Joyboy"
  <prototype>: String { "" }
*/

console.log(gameName[0]);
console.log(gameName.__proto__); // this shows that the string is an object

// Here I am gonna write the most used and important methods and property of strings
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("o", 2));
// console.log(gameName.trim());
// console.log(gameName.repeat(2));
console.log(gameName.concat(url));
console.log(gameName.substring(3, 6));
console.log(gameName.slice(3, 6)); // you can say that slice is a superset of substring and slice can also take negative arguments which are treated as counting from the end of the string.
console.log(url.replace("%20", "-"));
console.log(url.includes("developer"));
console.log(gameName.trim().split("y", 2)); // this method splits a string into substrings using the specified separator and return them as an array.


// https://chatgpt.com/c/678b50f1-86c4-800b-91d0-dee3562b45d7
// https://chatgpt.com/c/678b5953-8b98-800b-bee9-f30a57fa13a7
