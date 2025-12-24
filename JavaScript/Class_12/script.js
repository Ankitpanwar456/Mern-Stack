function outer()
{
    let IntiallyPostCount=1;
     return function  ()
    {
        // console.log(IntiallyPostCount);
        return IntiallyPostCount++;
    }


    
}

let ab =null;
 ab=outer(); //yanha "ab" ek object he kyonki "ab" memory ka address store kar rha he, agar hum value ko store karna he toh usse hum object ke andar store karenge
console.log(ab());
console.log(ab());
console.log(ab());
console.log(ab());
//   **************
console.log("second object");
let ob1=null;
ob1=outer();
console.log(ob1());
console.log(ob1());
console.log(ob1());
console.log(ob1());
console.log(ob1());



