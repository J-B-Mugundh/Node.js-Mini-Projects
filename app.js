// Global Objects

//console.log("Hello World!");

// let count = 0;
// const timer = setInterval(() => {
//     count = count + 2;
//     console.log(`${count} seconds have passed`);
//     if(count > 6)
//         clearInterval(timer);
// }, 2000);

// console.log(__dirname);

//console.log(__filename);

// Functions in Node js

// function callbackFunc(func){
//     func();
// }

// let red = function(){
//     console.log('hi there');
// }

// callbackFunc(red);

// Modules and Require in Node JS

const helper = require('./helper');

console.log(helper.user("Mugundh"));
console.log(helper.id(11));
console.log(helper.user("mugundhjb@gmail.com"));