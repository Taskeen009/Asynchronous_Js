//promise



// const  promise =new Promise((resolve,reject)=>{
//     const allwell=true
//     if(allwell)
//         resolve("all things went well")
//     else
//     reject('oops something fishy')
// },)

// console.log(promise)


const promise = new Promise((resolve, reject) => {
    const allwell = true;  // Change this based on your condition (true or false)

    setTimeout(() => {  // Adding setTimeout to delay the resolution/rejection
        if (allwell) {
            resolve("All things went well!");
        } else {
            reject("Oops! Something fishy happened.");
        }
    }, 2000);  // 5 seconds delay
});


console.log(promise)
// Handling the promise result
//consume msg method
promise.then((message) => {
        console.log(message);  // Will log if promise is resolved
    }).catch((error) => {
        console.log(error);  // Will log if promise is rejected
});




