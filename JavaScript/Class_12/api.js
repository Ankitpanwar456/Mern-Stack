// function apicalling(method,url)
// {
//     const obj1=new XMLHttpRequest();
//     obj1.response="json";
//     obj1.open(method,url);
//     obj1.send();
//     console.log(obj1);
// }

// apicalling("GET",  "https://jsonplaceholder.typicode.com/posts")


function NarakKaDwar(method, url, printApiData) {
    const obj = new XMLHttpRequest();
    obj.responseType = "json";
    obj.open(method, url);
    obj.send();
    obj.addEventListener("load", () => {
        printApiData(obj.response)
    })
}

NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
    console.log("Ye meri all posts hai", data);


    NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
        (data) => {
            console.log("Ye meri Single Post hai", data)
            NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
                (data) => {
                    console.log("Ye meri Single Post ke andar je sare comments hai", data)
                    NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[3].postId}`,
                        (data) => {
                            console.log("Ye meri Single Post ke andar ek comments hai", data)
                            NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
                                console.log("Ye meri all posts hai", data);


                                NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
                                    (data) => {
                                        console.log("Ye meri Single Post hai", data)
                                        NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
                                            (data) => {
                                                console.log("Ye meri Single Post ke andar je sare comments hai", data)
                                                NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
                                                    (data) => {
                                                        console.log("Ye meri Single Post ke andar ek comments hai", data)
                                                        NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
                                                            console.log("Ye meri all posts hai", data);


                                                            NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
                                                                (data) => {
                                                                    console.log("Ye meri Single Post hai", data)
                                                                    NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
                                                                        (data) => {
                                                                            console.log("Ye meri Single Post ke andar je sare comments hai", data)
                                                                            NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
                                                                                (data) => {
                                                                                    console.log("Ye meri Single Post ke andar ek comments hai", data)

                                                                                });
                                                                        });
                                                                });

                                                        });
                                                    });
                                            });
                                    });

                            });
                        });
                });
        });

});