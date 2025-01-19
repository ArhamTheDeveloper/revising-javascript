// Using `new` (e.g., new Date(), new Number(), new String()) creates an object/instance of that constructor.
// This object has access to the prototype methods of the respective constructor.
// Without `new` (e.g., Date(), Number(), String()), you're simply calling the constructor function as a regular function.
// In this case, it returns a value (e.g., a string, number, or date string) and does not create an object instance.


// Dates
let myDate = new Date() // by default console.logging this it gives us result in iso string format.
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
// })

// https://chatgpt.com/c/678caaf4-a3d0-800b-95f4-f97486b1f3f0