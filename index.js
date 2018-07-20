// // Callback Function

// function logName(name) {
//     console.log(`My name is ${name}`);
// }

// function insertName(callback) {
//     var name = "Cruz Ramirez";
//     callback(name);
// }

// insertName(logName);

// // Promise

// const condition = false;

// var myFirstPromise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve("Fulfilled!");
//     } else {
//         const reason = new Error("Rejected!");
//         reject(reason);
//     }
// });

// myFirstPromise
//     .then(successMessage => {
//         console.log(".then >>> " + successMessage);
//     })
//     .catch(error => console.log(".catch >>> " + error.message));

// // Advanced Promise

// const isMomHappy = true;

// const willIGetNewPhone = new Promise((resolve, reject) => {
//     if (isMomHappy) {
//         const phone = {
//             brand: "Samsung",
//             color: "black"
//         };
//         resolve(phone);
//     } else {
//         const reason = new Error("Mom is not happy");
//         reject(reason);
//     }
// });

// const showOff = function (phone) {
//     const message = "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";
//     return Promise.resolve(message);
// };

// const askMom = function () {
//     willIGetNewPhone
//         .then(showOff)
//         .then(fulfilled => console.log(fulfilled))
//         .catch(error => console.log(error.message));
// };

// askMom();