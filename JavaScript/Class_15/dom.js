
// *****************first task**************
let bo=document.getElementsById("body"); // kaha hame button banana he use pahle hum select karenge
let btn=document.createElement("button");  // ab hum yanha button banayenge 
btn.textContent="Press me";  // button ke ander ab hum text dal rhe he
bo[0].appendChild(btn);     // ab button ko ab hum body ke ander dal rhe he


// ****************send task************
// hum ne yanha select kar ke rakha he or 
// 1 -> get the btn so we already have btn(done)

// 2-> attcheventListner
btn.addEventListener("click", ()=>{
    let paraEle=document.createElement("p");
    console.log("me nhi karunga");
    paraEle.textContent="me kar lunga";
    bo[0].appendChild(paraEle);
})