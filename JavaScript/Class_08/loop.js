// ------------------------------------------Do while loop --------------------------
//  let a=1;
// do{
//     console.log("Do while loop ",a)
//     a+2;
// }
// while(a<=4); //do while loop me condition false hone ke baad bhi code ek baar execute hota he

// ----------------------------------while loop --------------------------------------


// while(a<=10)
// {
//     console.log("while loop in js",a);
//     a++;
// }



// //////////////////////////solve 50 Questions

// 1. even or odd

// let a=50;
// if(a%2==0)
// {
//     console.log("the number is even");
// }
// else
//     console.log("the number is odd");



// 2 divisible by 5 and 11
// let a=50;
// if(a%5==0 && a%11==0 )
// {
//     console.log("the number is divisible is 5 and 11");
// }
// else
//     console.log("not divisible by 5 and 11");


// 3 positive negative or zero

// let a=100;

// if(a==0)
// {
//     console.log("the number is zero");
// }

// else if(a>=1)
// {
//     console.log("the number is positive");
// }

// else
// {
//     console.log("the number is negative");
// }


// 4 divisible by 2,3,5

// let a=30;
// if(a%2==0 && a%3==0 && a%5==0 )
// {
//     console.log("the number is divisible is 2,3 and 5");
// }
// else
//     console.log("not divisible by 2,3,5");

// 5 reverse a number without using  X




// 6 check whether a given number is a palindrome

// let number=1000;


// 10 find the sum of digits of a number

// let a=10;
// let product=0;
// let total=0;
// for( let i=1;i<=a;i++)

// {
//    product=i;
//   total=total+product;  
// }
// console.log(total);

// 11 find the product of digits of a number
// let a=6;
// let product=0;
// let total=1;
// for( let i=1;i<=a;i++)

// {
//    product=i;
//   total=total*product;  
// }
// console.log(total);


//  16.Find the factorial of a number.
// let number=10;
// let factorial=1;
// for(let i=1;i<=number;i++)
// {
//     factorial=factorial*i;
//     console.log(factorial);
// }

// 33. Generate Fibonacci series up to n terms.

// let number=5;
// let a=0;
// let b=1;
// let c;

// if(number==0)
// {
//     console.log("0 fibonacci sereis is = 0")
// }
// else if(number==1)
// {
//     console.log("1 fibonacci series is =1")
// }

// else
// {

//     for(let i=1;i<=number-2;i++)
// {
    
//     c=a+b;
//     a=b;
//     b=c;  
// }
// console.log(c)

// }



// 20. Check whether a number is prime

// let number=1;

// if(number==1)
// {
//   console.log("not prime  prime")
// }
// else if (number==0)
// {
//   console.log("not prime number")
// }



// -----------------------------------------------------------------Object in js

// let car_info={
//     "Brand-name":"Honda",
//     "Modal-name" : "City-i10",
//      price : 250000,
//      address: {
//     city: "Delhi",
//     pincode: 110045
//   }

// }

//   console.log(car_info.address.city)  ;








// 5. reverse a number without using built function

// let number = 123456078;
// let reverse = 0;

// while(number != 0){
//     let digit = number % 10;      
//     reverse = reverse * 10 + digit;
//     number= Math.trunc (number / 10);
// }

// console.log("Reverse =", reverse);



// x=5;
// y=5;
// function b(x,y)
// {
//   return x+y;
// }
// function a(b)
// { 
//    sum=b(5,5); 
//   c=5;
//   sum=sum+c;
//   console.log(sum)
  
// }
// a(b);

  
// function expression 

// let add = function(x, y) {
//     return x + y;
// };

// let result = add(10, 20);
// console.log(result); // 30



// let add2 =function(x,y)
// {
//     return x+y;
// }

// let dd = add2(10,50);
// console.log(dd);

// let a = (x,y) => x+y;

// let b=a(10,100);
// console.log(b);






// let add = (x,y) => x+y
// console.log(add(10,20));
// function one() {
//     let x=50;
//     let y=20;
//     return x+y;
// }



// function two(callbackFunction) {   // HOF
//     let y = 10;
//     // let z = callbackFunction();    // function ko yaha call kiya
//     console.log(y + ank);
// }

// two(one);   // function pass kiya




























 


 
