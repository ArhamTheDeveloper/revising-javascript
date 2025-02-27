// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Orewa Promise One");
//     resolve();
//   }, 1000);
// });
// promiseOne.then(() => {
//   console.log("Promise one resolved and handled in .then");
// });

// new Promise((resolve, reject) => {
//   console.log("Orewa Promise Two");
//   resolve();
// }, 2000).then(() => {
//   console.log("Promise two resolved and handled in .then");
// });

// const promiseThree = new Promise((resolve, reject) => {
//   console.log("Orewa Promise Three");
//   resolve({ name: "Arham", cast: "Shaikh" });
// }, 3000);

// promiseThree.then((user) => {
//   console.log("Promise three resolved and handled in .then",user);
// });

// ******
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });
