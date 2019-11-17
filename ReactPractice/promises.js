
function doTask(name) {
  const p = new Promise ((resolve, reject) => {
    console.log(`${name} has started, woohooooo`);
    const duration = Math.floor(Math.random() * 5000);
    setTimeout(() => {
    console.log(`${name} has ended after ${duration} milliseconds`);
    }, duration);
  });
  return p;
 }

 doTask('A')
 .then(result => {
   console.log(result);
 });


 doTask('C')
 .then(result => {
   console.log(result);
 });

doTask('D')
 .then(result => {
   console.log(result);
 });

doTask('E')
 .then(result => {
   console.log(result);
 });

doTask('F')
 .then(result => {
   console.log(result);
 });

 Promise.all([
    doTask('A'),
    doTask('B'),
    doTask('C')
  ])
  .then(results => {
    //first console.log the results
    results.forEach(result => console.log(result));
    return doTask('D');
  })
  .then(result => {
    console.log(result);
  });

// const p2 = doTask('A');
// console.log(p2);


// const p1  = new Promise((resolve, reject) => {
//   console.log('Running the asynchronous code here');
//   const duration = Math.floor(Math.random() * 5000);
//   setTimeout(() => {
//     console.log('About to fail')
//     reject();
//   }, duration)
//   });

// p1.then(() => {
//   console.log('The promise completed successfully');
// }).catch(() => {
//     console.log('The promise has failed')
// });



// console.log('The code has started');
// const duration = Math.floor(Math.random() * 5000);
// setTimeout (() => {
//   const seconds = duration / 1000;
//   console.log(`Hey, you I waited ${seconds}! seconds, and ${duration} milliseconds`);
// }, duration);
// console.log('This is the last statement of this script');



