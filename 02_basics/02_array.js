// How to join two or more arrays

const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["batman", "flash", "superman"];

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes[3][0]);

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_new_heroes);

// const anotherArray = [0, 1, 2, [12, 3, 18], [98, 89, 23, [12, 21, 34]]];
// const real_another_array = anotherArray.flat(Infinity)
// console.log(real_another_array);


console.log((Array.isArray("Zoro")));
console.log(Array.from("Zoro"));
console.log(Array.from({color:"blue"})); // interesting

let num1 = 100;
let num2 = 200;
let num3 = 300;
console.log(Array.of(num1, num2, num3));


