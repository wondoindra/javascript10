// Level 0

// const numberOrNot = (input) => {
//     return new Promise((resolve, reject) => {
//         if (typeof input === "number") {
//             resolve("input is a number");
//         } else {
//             reject(Error(": input is not a number"));
//         }
//     });
// }


// numberOrNot(20).then(response => console.log(response)).catch(error => console.log(error));
// numberOrNot(099).then(response => console.log(response)).catch(Error => console.log(reject));
// numberOrNot(true).then(response => console.log(response)).catch(Error => console.log(reject));

// Level 1

// const numberOrNot = (input) => {
//     if (typeof input === "number") {
//         return Promise.resolve("input is a number");
//     } else {
//         return Promise.reject(Error("input is not a number"));
//     }
// }

// numberOrNot(20).then(response => console.log(response)).catch(error => console.log(error));
// numberOrNot(100).then(response => console.log(response)).catch(error => console.log(error));
// numberOrNot(true).then(response => console.log(response)).catch(error => console.log(error));

// Level 2

// Using If

// const inputVariable = (input) => {
//     if (typeof input === "boolean") {
//         return Promise.resolve("input is a boolean");
//     }
//     if (typeof input === "number") {
//         return Promise.resolve("input is a number");
//     }
//     if (typeof input === "string") {
//         return Promise.resolve("input is a string");
//     } else {
//         return Promise.reject(Error("input format unidentified"));
//     }
// }

// const inputVariable = (input) => {
//     switch (typeof input) {
//         case "boolean":
//             return Promise.resolve("input is a string")
//             break;
//         case "number":
//             return Promise.resolve("input is a number")
//             break
//         case "string":
//             return Promise.resolve("input is a string")
//             break
//         case "undefined":
//             return Promise.resolve("input format unidentified")
//             break
//     }
// }

// inputVariable(20).then(response => console.log(response)).catch(eror => console.log(error));
// inputVariable("what").then(response => console.log(response)).catch(error => console.log(error));
// inputVariable(true).then(response => console.log(response)).catch(error => console.log(error));
// inputVariable(undefined).then(response => console.log(response)).catch(error => console.log(error));

// Level 3

// const numberValidation = (input) => {
//     if (typeof input === "number") {
//         return Promise.resolve(input);
//     } else {
//         return Promise.reject("input a number");
//     }

// }

// const multipleByTwo = (result) => {
//     return Promise.resolve(result * 2);
// }

// const multipleByThree = (result) => {
//     return Promise.resolve(result * 3);
// }

// numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err))
// numberValidation("").then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err))

// Level 4

// const numberValidation = (input) => {
//     if (typeof input === "number") {
//         return Promise.resolve(input);
//     } else {
//         return Promise.reject("input a number");
//     }
// }

// const multipleByTwo = (result) => {
//     return Promise.resolve(result * 2);
// }

// const multipleByThree = (result) => {
//     return Promise.resolve(result * 3);
// }

// console.log("before promise");
// numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err))
// numberValidation("").then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err))
// console.log("after promise");

// let finalResult = numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err))

// async function syncChaining() {
//     await console.log("before promise")
//     await finalResult
//     await console.log("after promise")
// }

// syncChaining();

// Level 5

const numberValidation = (input) => {
    if (typeof input === "number") {
        return Promise.resolve(input);
    } else {
        return Promise.reject("input a number");
    }
}

const multipleByTwo = (result) => {
    return Promise.resolve(result * 2);
}

const multipleByThree = (result) => {
    return Promise.resolve(result * 3);
}

let finalResult = numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => {
    return res
}).catch(err => {
    return err
})

// console.log(finalResult)

async function syncChaining() {
    await finalResult
    console.log(finalResult)
}

syncChaining()