// Objects ko declare karne ke 2 ways : 1 literal ki tarah 2: constructor ki tarah
// singleton => constructor se bana hua object singleton hota hai matlab ye apni tarah ka aik he object hai
// lekin jab hum literal se banate hain to woh singleton nahi hota us ke multiple instances ban sakte hain
// Object.create => this is the constructor method aur isi se singleton object banta hai
// ya phir new Object() aise bhi singleton object banta hai

// Object literals
const mySym = Symbol("key1");
const myNum = new Number(78);

const JsUser = {
  name: "Arham",
  "full name": "Ahmed",
  "full name": "MuhammadArham",
  age: 18,
  age: 30,
  // i have written full name and age keys two times to show that if we write the same key more than once the property that will be used will be the one in the last
  cast: "Shaikh",
  height: "5ft 2Inches",
  location: "Shikarpur",
  isLoggedIn: false,
  lastLoginDays: ["Monday,Friday"],
  [mySym]: "myKey1",
};

// console.log(JsUser[mySym]);
// console.log(JsUser["full name"]);

// Object.freeze(JsUser) this is used to stop changes in object
JsUser.name = "Joy";
// console.log(JsUser.name);
JsUser.email = "arham@12.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log(`Salam ${this["full name"]}`);
};
console.log(JsUser);
console.log(JsUser.greeting());

// Just trying things
// let mystr = "arham"
// console.log(mystr["length"]);

/* ChatGpt conversation summary : 
1: Object Keys in JavaScript: Object keys are always strings or symbols. Non-string keys (like numbers or booleans) are automatically converted to strings.

2: Symbols:

    Symbols are unique and immutable.
    They don't convert to strings automatically, preserving uniqueness and avoiding key collisions.
    Used for non-enumerable, hidden object properties.

3: Using Objects and Complex Types as Keys: Objects (e.g., new Number(34)) are converted to strings using their toString() method when used as keys.

4: Why Symbols Aren’t Converted to Strings: To maintain their unique identity, avoid collisions with string keys, and preserve encapsulation for hidden or internal properties.

5: In JavaScript, properties of an object refer to the key-value pairs.So, when we talk about object properties, we're referring to both the keys and their values. The key is the property’s name, and the value is its associated data.
*/
