// console.log('class 6 ')

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //pure function-> esa function jisko bar bar same argument(optional) ke sath call karne par same o/p aata hai use pure function bolte hai.
// function pureFunction(){
//     console.log('its a pure function')
// }
// pureFunction()// same op
// pureFunction()// same op
// pureFunction()// same op

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// impure function->esa function jisko bar bar same argument(optional) ke sath call karne par har bar alag alag  o/p aata hai use impure function bolte hai.

// let age = 10;
// function impureFunction() {
//     console.log(age++, ' = its a impure Function');

// }
// impureFunction()//10
// impureFunction()//11
// impureFunction()//12
// impureFunction()//13
// impureFunction()//14

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* IIFI Function -> agar mujhe koi simple sa task karana hai to uske leaye iffe
 ka use karte hai


syntax
1.1
console.log((function () {
    return console.log('hey its a IIFI function');

})())

// 1.2
console.log(function () {
    console.log("Hello Ram")
}
())*/


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*callback function->
esa function jo kisi dusri function kee calling par as an argument pass hota hai to us argument vale function ko callback function bola jata hai*/

//Noob
// function callback(){
//     console.log("this is callback function ")
// }

// function higherOrderFunction(de){
//     console.log(de)
//     de()
//     console.log("This is higher order function bcs its taking other function as a parameter")
// }
// // console.log(callback)
// higherOrderFunction(callback)



// pro
// let ans = () => {
//     console.log("this is callback function ")
// }

// function higherOrderFunction(de) {
//     console.log(de)
//     de()
//     console.log("This is higher order function bcs its taking other function as a parameter")
// }
// // console.log(callback)
// higherOrderFunction(ans)


// // pro ultra


// function higherOrderFunction(de) {
//     console.log(de)
//     de()
//     console.log("This is higher order function bcs its taking other function as a parameter")
// }
// // console.log(callback)
// higherOrderFunction( () => {
//     console.log("this is callback function ")
// })


function ladkiVala() {
    return "madhu";
}

function ladkeVala(ladki) {
    let ladkiName = ladki();
    let ladkeKaNaam = "Jagmohan"
    console.log(`byah sampnn hua ladka${ladkeKaNaam} ke sath ladki ${ladkiName}`)
}


ladkeVala(ladkiVala)





// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\second file \\\\\\\\\\\\\

// console.log("arrow function");
// !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function!!!!!!!!!!!!!!!!!!!!!!! 

/* arrow function->
its a concise or shorter syntex to perform a task.
arrow function do not support hoisting.

Ex->/
// normal function
// function addTowNo(x,y){
//     console.log(x+y);
// }
// addTowNo(3,6)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function without return !!!!!!!!!
// a)arrow function 
// let add=(x,y)=>{
//     console.log(x+y);
// }
// add(40,90)
// b)arrow function 2nd syntex
// let arr=(x,y)=>console.log(x+y);
// arr(4,6);


// !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function with return !!!!!!!!!
// simple function with return 
// function sumOfTwoNo(x,y){
//     return x+y;
// }
// let ans=sumOfTwoNo(8,9)// 1st way jab aap function ke op ko function ke bahar use karte hai
// console.log(sumOfTwoNo(8,8));// 2nd way jab aap function ke op ko function ke bahar print karte hai


// arrow function 
// let sumOfThree=(x,y,z)=>x+y+z;

// let ans1=sumOfThree(1,2,3);
// console.log(ans1);
// console.log(sumOfThree(1,2,3));



// let sumOfFour=(a,b,c,d)=>{
//     return (a+b+c+d);
// }


// let ans2=sumOfFour(1,2,3,4);
// console.log(ans2);
// console.log(sumOfFour(1,2,3,4));



/ !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function with no return but store in
 variable and call inside console.log() !!!!!!!!!/

//  let multiply=(s,t)=>console.log(st);

//  let ans=multiply(5,6);
//  console.log(ans);
//  console.log(multiply(5,6));



/* !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function with multiple liens/
// let complexCalculation=(x,y)=>{
//     console.log(x+y);
//     console.log(x-y);
//     console.log(xy);
//     return x**y;
// }



// // let output=complexCalculation(10,2);
// // console.log(output);

// console.log(complexCalculation(10,2));