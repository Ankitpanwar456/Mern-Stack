// console.log("hello")


// function callbackhell(method,url,next)
// {
//     const obj1=new XMLHttpRequest();
//     obj1.responseType="json";
//     obj1.open(method,url);
//     obj1.send();
//     obj1.onload=()=>{
//         console.log(obj1.response);
//         next(obj1.response);
//     }
// }

// callbackhell("GET", "https://fakestoreapi.com/products" ,(data)=>
// {
//  console.log(data);
//  callbackhell("GET", `https://fakestoreapi.com/products/category/${data[0].category}`, (data)=>
// {
//     console.log(data)
//     callbackhell("GET", `https://fakestoreapi.com/products/${data[2].id}`, (data)=>
//     {
//         console.log(data);
//     } )
// })
    
// })

// first case in promise
// const p1=new Promise((a,b)=>
// {

// });
// console.log(p1);

// second case

// const p1=new Promise((resolve,reject)=>
// {
//     resolve("promise is fullfiled");
//     reject("promise");
// })
// console.log(p1);

//async await use to perform sideeffects and also solve the chaining problem.

// async function FetchProducts(url)
// {
//    const rest1 = await fetch(url);
//    const ans1 =await rest1.json();
//    console.log("First Api Calling",ans1);

//         //Second api calling
//         const rest2=await fetch(`${url}/category/${ans1[0].category}`);
//         const ans2 = await rest2.json();  
//         console.log("second api calling",ans2);

//         // third api calling
//         const rest3=await fetch(`${url}/${ans2[0].id}`);
//         const ans3=await rest3.json();
//         console.log("third api calling",ans3);
//         // 

// }

// FetchProducts("https://fakestoreapi.com/products");




