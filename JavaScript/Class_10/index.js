/******************************* Rest operator******************
 1. Rest operator ka use hum function ke parameter me  karate he our use hum rest parameter kahate he .
 2. A function definition can only have one rest parameter.
 3. The rest parameter must be the last parameter in the function definition.
 4. Trailing commas are not allowed after the rest parameter.
 5. The rest parameter cannot have a default value.
 6. Rest parameter (...) ek function ko unlimited arguments receive karne deta hai aur un saare extra arguments ko ek single array me collect kar leta hai.”
 7. The rest parameter (...) allows a function to accept an unlimited number of arguments and collects all remaining arguments into a single array.” */


// function sum(x,y,...z)
// {
//     console.log(z);
// }
// sum(30,40,50,60);

/********************************Spread operator ****************
 1. kisi ek variable ki value ko dusre variable me copy karne ko hum spread operator kahate he 
 2. iska use hum array our object ke sath karate he yani non primitive data type ke sath
 3. denotes(...a1) iski ye pahachan he. spread our rest dono ek jese dikhte he lekin dono ka kaam alag alag he. */

// let arr1=[10,20,30,40,"ankit-panwar","spread-operator"];
// let arr3=[50,60,70,80];
// let arr2=[...arr1,...arr3]; //yanha do array merge ho rhe he 
// console.log(arr2);


/******************************Destructuring***********************
1. Destructuring me hum kisi object ya array  se value nikal kar kisi variable me store karate he toh hum use Destructuring kahate he ek stracture ko hum change kar rhe he use hum destracturing kahate he
2.Destructuring means: array ya object ke values ko shortcut way me alag-alag variables me निकालना.
3.Destructuring is a JavaScript feature that allows you to extract values from arrays or properties from objects and assign them directly to variables using a clean, shorthand syntax.
*/

// const arr=['apple','banana','jamun','chiku'];
// console.log(arr[1]); // it is old method and now use destucturing you extract the value in array and store a variable
// const[first,second,third]=arr; //thi method is called destructuring in array
// console.log(first);


// ********************* Destructuring in object**********
 const info={
    name:"Ankit panwar2025",
    'mobile-number':9893152887
 }

//  console.log(info.name); 
 const {na , mobileNumber } =info //destructuring ka use hum kar rhe he
 console.log(info);

