// let a=10;
// let  b=25;

// {
//     console.log("global variable" , a);
//     b=30;
//      console.log("const variable",b)
//      var d=10;
// }

// console.log(d)

// function add()
// {
//     sam=10;
//     let bb=20;
//     let sum = a+b;
//     return sum
// }


//    console.log(add())

// console.log("global variable in function" sam);




// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\chat gpt \\\\\\\\\\\\\\

// Declare a variable 'a' with value 10
// let a = 10;

// Declare a variable 'b' with value 25
// let b = 25;

// ---------------- BLOCK SCOPE START ----------------
{
    // 'a' is a global variable so we can access it here
    // console.log("global variable", a);

    // We are updating the value of 'b' (allowed because b is let)
    b = 30;

    // Printing the updated value of 'b'
    // console.log("updated b variable", b);

    // 'var' creates a function-scoped or global-scoped variable
    // So 'd' will be accessible outside this block also
    // var d = 10;
}
// ---------------- BLOCK SCOPE END ----------------

// 'd' is accessible here because var ignores block scope
// console.log(d);

// ---------------- FUNCTION START ----------------
function add() {
    // We did NOT use let/const/var → So 'sam' becomes GLOBAL variable (bad practice)
    // sam = 10;

    // Local variable inside function
    // let bb = 20;

    // Using 'a' and 'b' (global variables) inside the function
    // let sum = a + b;

    // return sum;
}
// ---------------- FUNCTION END ----------------

// Calling function and printing returned value
// console.log(add());

// This will work because 'sam' became global (not recommended)
// console.log("global variable in function", sam);


// let → Block scoped ({} ke bahar access nahi hota)

// const → Block scoped + value change nahi hota

// var → Block scope ko ignore karta hai (function scope hota hai)

// Without let/const/var → Variable GLOBAL ban jata hai (bahut dangerous)



{
    a=20;
}

console.log(a)