// const obj={
//     id:101,
//     name : "xyz",
//     pointData:function()
//     {
//         console.log(this.id,this.name);
//         console.log(obj)
//     }
// }

// console.log(pointData());

// function dd()
// {
//     console.log(this);
// }

// dd();

// function getvalue()
// {
//     console.log(this);
// }
// new getvalue();  //output me empty object



// ***********************************************"This" Keyword***************
 /*
1.
2.
3. */

// 1.1 first case in "this" keyword
// console.log(this); //window is a default value and target window.

// 1.2 second case in "this" keyword
 
// function dd()
// {
//     console.log(this); // ye bhi hamra default value deta he matlab window 
// }
// dd();

//1.3 Third case in "this" keyword

// const arro =()=>
// {
//     console.log(this); //ye bhi hamra default value deta he matlab window
// }
 
// arro();

// 1.4 Fouth case in "this" keyword

const obj={
    id:"c-121",
    color:"indus",
    on:function()
    {
        console.log(this.id);  // yanha par hmara "this" keyword object ko target kar rha he 
    }
}
obj.on();

// 1.5 Fifth case in "this" keyword

const obj2={
    id:"c-125",
    color:"white-of",
    on:()=>
    {
        console.log("arrow function",this); //yanha par "this" keyword window ko target kar rha he, arrow function this ko support nhi karta he
        console.log("tu ni chalega",this.id); //yanha par "this" undefine de rha he kyonki this arrow function me use ho rha he our yeh undefine de rha he.
    }
}

obj2.on();



