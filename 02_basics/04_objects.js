// const FbUser = new Object({
//   name: "Arham",
//   age: 23,
//   email: "arham@12.com",
//   city: "Shikarpur",
//   address: {
//     street: "123 Main St",
//     city: "Shikarpur",
//     country: "Pakistan",
//   },
// });
// console.log(FbUser);

// const user = {
//   email: "user@what.com",
//   fullname: {
//     userfullname: {
//       firstname: "Arham",
//       lastname: "Shaikh",
//     },
//   },
// };

// console.log(user.fullname?.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };

// const obj3 = {obj1,obj2} // least used syntax
// const obj3 = Object.assign({},obj1,obj2,obj4) // can be used
const obj3 = { ...obj1, ...obj2, ...obj4 }; // most used syntax
// console.log(obj3);

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
  },
  {
    id: 1,
    name: "Johan Doe",
    email: "johndoe@example.com",
    age: 30,
  },
  {
    id: 1,
    name: "Gohan Doe",
    email: "johndoe@example.com",
    age: 30,
  },
];

// console.log(users[2].name);

// console.log(Object.keys(FbUser));
// console.log(Object.values(FbUser));
// console.log(Object.entries(FbUser));
// console.log(FbUser.hasOwnProperty("address"));


// Object destructuring
const course = {
  id: 1,
  title: "JavaScript",
  author: "John Doe",
  description: "This course covers the fundamentals of JavaScript",
  price: 19.99,
}

const {description: desc} = course;
console.log(desc);
