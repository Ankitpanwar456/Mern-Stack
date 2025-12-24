let FirstDiv=document.getElementById("DivFirst");
let para=document.createElement("p");
console.log("p");
para.textContent="this is paraSecond";
FirstDiv.appendChild(para);
console.log(para);


let paraBtn=document.createElement("button");
paraBtn.textContent="Click Me";
FirstDiv.appendChild(paraBtn);


paraBtn.addEventListener("click", ()=>{
    let ab=document.createElement("p");
    ab.textContent="tune hi meri jindi kharab ki he";
    FirstDiv.appendChild(ab);
})

let deleteBtn=document.createElement("button");
deleteBtn.textContent="delete";
FirstDiv.appendChild(deleteBtn);

deleteBtn.addEventListener("click",()=>{
    let ab=document.createElement("p");
    FirstDiv.removeChild(ab);
    console.log(ab);
})






