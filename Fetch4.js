// fetch('https://dummyjson.com/products/1',{
//     method:'PUT',
//     headers:{
//          'Content-type':'application/json'
//     },
//     body:JSON.stringify({
//         title:'iphone 19',
//         description:'IPHONE',
//         price:'1000',
//         rating:'9/10'
//     })
// })
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log((error)))


const getAllProducts=async()=>{
    try{
    const response =await fetch('https://dummyjson.com/products')
    const json= await response.json()
    console.log(json.products[0])
    const prod=json.products[0]
    console.log(typeof prod)
    // console.log(typeof json.products)
    }
    catch(e){
        console.log(e)
    }
}
getAllProducts()