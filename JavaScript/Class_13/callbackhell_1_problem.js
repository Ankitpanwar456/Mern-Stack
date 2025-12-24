// function NarakKaDwar(method, url, printApiData) {
//     const obj = new XMLHttpRequest();
//     obj.responseType = "json";
//     obj.open(method, url);
//     obj.send();
//     obj.addEventListener("load", () => {
//         printApiData(obj.response)
//     })
// }

// NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
//     console.log("Ye meri all posts hai", data);


//     NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
//         (data) => {
//             console.log("Ye meri Single Post hai", data)
//             NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
//                 (data) => {
//                     console.log("Ye meri Single Post ke andar je sare comments hai", data)
//                     NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
//                         (data) => {
//                             console.log("Ye meri Single Post ke andar ek comments hai", data)
//                             NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
//                                 console.log("Ye meri all posts hai", data);


//                                 NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
//                                     (data) => {
//                                         console.log("Ye meri Single Post hai", data)
//                                         NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
//                                             (data) => {
//                                                 console.log("Ye meri Single Post ke andar je sare comments hai", data)
//                                                 NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
//                                                     (data) => {
//                                                         console.log("Ye meri Single Post ke andar ek comments hai", data)
//                                                         NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
//                                                             console.log("Ye meri all posts hai", data);


//                                                             NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
//                                                                 (data) => {
//                                                                     console.log("Ye meri Single Post hai", data)
//                                                                     NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
//                                                                         (data) => {
//                                                                             console.log("Ye meri Single Post ke andar je sare comments hai", data)
//                                                                             NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
//                                                                                 (data) => {
//                                                                                     console.log("Ye meri Single Post ke andar ek comments hai", data)

//                                                                                 });
//                                                                         });
//                                                                 });

//                                                         });
//                                                     });
//                                             });
//                                     });

//                             });
//                         });
//                 });
//         });

// });


function NarakKaDwar(method,url,printApiData)
{
    const obj=new XMLHttpRequest();
    obj.responseType="json";
    obj.open(method,url);
    obj.send();
    obj.addEventListener("load",()=>
    {
        printApiData(obj.response);
    })

}

NarakKaDwar("GET","https://jsonplaceholder.typicode.com/posts",(data)=>{
    console.log("Ye meri all posts hei", data);

    NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,(data)=> {
        console.log("Ye meri Single Post hai", data);

        NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0]}`,(data)=>{
            console.log("Ye meri Single Post ke andar ye sare comments  hai", data);

            // NarakKaDwar("GET" ,`https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,(data)=>{
            //     console.log("ye meri single post ke andar ek comments hai",data);

                        

            // })
        })
    })
});


//  ********************************************Promise********************

// 1st way const p=new Promise((resolve,reject)=>
// {

// });
// console.log(p);


// const p=new Promise((resolve,reject)=>
// {
//     reject("promise reject");
//     resolve("promise fullfiled");
    
// });

// console.log(p);