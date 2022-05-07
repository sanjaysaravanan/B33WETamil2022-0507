// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise One Resolved");
//   }, 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Two Resolved");
//   }, 4000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Three Resolved");
//   }, 6000);
// });

// Promise.all([p1, p2, p3]).then(value => console.log(value));


// Promise

// const promiseMethod = (a) => {
//   return new Promise((resolve, reject) => {
//     const resultVal = 2 * a;

//     console.log(resultVal);

//     resolve(resultVal);

//   });
// };

// promiseMethod(2)
//   .then((val) => promiseMethod(val))
//   .then((val) => promiseMethod(val));



const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise One Resolved");
    // reject(new Error("New Errror for Promise One"));
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise Two Resolved");
    reject(new Error("Reject at Promise Two"));
  }, 4000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise Three Resolved");
    reject(new Error("Reject at Promise Threee"));
  }, 6000);
});


// Promise.all([p1, p2, p3])
// .then((val) => console.log(val))
// .catch(err => console.log(err));
