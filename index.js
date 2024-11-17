// setTimeout(()=>{
//     console.log("hello")
// },1000)

// setTimeout(()=>{
//     console.log("bye");
// },1000)


// function printHello() {
//     setTimeout(() => {
//         console.log("hello");
//     }, 1000);
// }

// function printBye() {
//     setTimeout(() => {
//         console.log("bye");
//     }, 2000);
// }


// printBye();
// printHello();



// function printHello(callback) {
//     setTimeout(() => {
//         console.log("hello");
//         callback(); // Execute the callback if provided
//     }, 1000);
// }

// function printBye(callback) {
//     setTimeout(() => {
//         console.log("bye");
//          callback(); // Execute the callback if provided
//     }, 1000);
// }

// printHello(() => {
//     console.log("This runs after hello.");
// });

// printBye(() => {
//     console.log("This runs after bye.");
// });

// printHello(() => {
//     printBye(() => {
//         console.log("Done!");
//     });
// });



////////////////////


const showmsg=(cb)=>{
    console.log(cb)
}

const firstmsg=(cb)=>{
    setTimeout(()=>{
        showmsg("hello")
        cb()
    },2000)
}

const secondmsg=()=>{
    showmsg("world");
}

firstmsg(secondmsg)