//promises
 const promise=new Promise((resolve,reject)=>{
    resolve("well done promise 1 done")
 })

 const promisetwo=new Promise((resolve,reject)=>{
    resolve("well done promise 2 done")
 })

 const promisethree=new Promise((resolve,reject)=>{
    resolve("well done promise 3 done")
 })

//  promise.then((msg)=>{
//     console.log(msg)
//     return promisetwo
//  }).then((msg)=>{
//     console.log(msg)
//     return promisethree
//  }).then((msg)=>{
//     console.log(msg)
//  })


// promise.then((value)=>{
//     console.log(value)
//     promisetwo.then((data)=>{
//         console.log(data)
//     promisethree.then((data)=>{
//         console.log(data)
//     })
//     })
// }).catch((er)=>{
//     console.log(er)
// })


