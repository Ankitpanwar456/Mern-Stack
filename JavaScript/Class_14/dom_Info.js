// ===============================
// JAVASCRIPT DOM PRACTICE
// ===============================
// Today I am learning DOM methods in JavaScript.
// This file contains practice code for selecting HTML elements.
// I am also learning how to read and change content and attributes.




// ===============================
// getElementById()
// ===============================
// This method selects an element using its unique id.
// It always returns a single HTML element.
// Mostly used when we know the exact id of an element.

let elem=document.getElementById("para-1");
console.log(elem);




// ===============================
// getElementsByClassName()
// ===============================
// This method selects multiple elements using a class name.
// It returns an HTMLCollection (array-like object).
// We can access elements using index numbers.

// let multiParagraph = document.getElementsByClassName('para')
// console.log(multiParagraph.length)
// console.log(multiParagraph[2])
let class_info=document.getElementsByClassName("para_class");
console.log(class_info);
console.log(class_info.length);
console.log(class_info[2]);


// ===============================
// getElementsByTagName()
// ===============================
// This method selects elements using HTML tag names.
// It returns all matching elements in HTMLCollection form.
// Useful when working with same type of tags.

// let tag_name=document.getElementsByTagName("p");
// console.log(tag_name);
// console.log(tag_name.length)
// console.log(tag_name[2])


// ===============================
// querySelector()
// ===============================
// This method selects the first matching element only.
// It uses CSS selector syntax.
// Very flexible and commonly used.
// First matching single element
// return Element / null

// let first_element= document.querySelector("p");
// console.log(first_element);


// ===============================
// querySelectorAll()
// ===============================
// This method selects all matching elements.
// It returns a NodeList.
// We can loop through it using forEach.

// let allElement = document.querySelectorAll('.para')
// console.log(allElement)
// let querySelectorAll=document.querySelectorAll("p");
// console.log(querySelectorAll);
// console.log(querySelectorAll.length);
// console.log(querySelectorAll[1]);


// ===============================
// *****textContent*********
// ===============================
// This property gets or sets all text inside an element.
// It includes hidden text also.
// Mostly used for reading or updating text.
// text content ki madad se hum element ke ander se text or content nikal sakte he 

// let elem = document.getElementById('head-1')
// console.log(elem.textContent)


// ===============================
// innerText
// ===============================
// This property gets or sets only visible text.
// It ignores hidden elements.
// Useful when UI-based text is needed.

// let elem = document.getElementById('head-1')
// console.log(elem.innerText)


// ===============================
// getAttribute()
// ===============================
// This method reads the value of an attribute.
// It does not change the attribute.
// Useful to check existing attributes.

// let elem = document.getElementById('head-1')
// console.log(elem.getAttribute('id'))


// ===============================
// setAttribute()
// ===============================
// This method adds or updates an attribute.
// If attribute exists, it updates the value.
// Mostly used to change class, id, or other attributes.

// let paragrapg = document.getElementsByTagName('p')
// console.log(paragrapg)
// paragrapg[0].setAttribute('class','para-6')


// ===============================
// DOM INTERVIEW QUESTIONS
// ===============================

// Q1: What is DOM?
// DOM stands for Document Object Model.
// It allows JavaScript to access and manipulate HTML elements.
// It represents HTML as a tree structure.

// Q2: Difference between getElementById and querySelector?
// getElementById selects only by id and is faster.
// querySelector uses CSS selectors and is more flexible.
// querySelector returns the first matching element.

// Q3: Difference between HTMLCollection and NodeList?
// HTMLCollection is live and updates automatically.
// NodeList is mostly static.
// NodeList supports forEach, HTMLCollection does not.

// Q4: Difference between textContent and innerText?
// textContent returns all text including hidden text.
// innerText returns only visible text.
// textContent is faster than innerText.

// Q5: How do you select multiple elements?
// By using getElementsByClassName.
// By using getElementsByTagName.
// By using querySelectorAll.

// Q6: What does querySelectorAll return?
// It returns a NodeList.
// It can contain multiple elements.
// It supports looping using forEach.

// Q7: How do you change an attribute in DOM?
// By using setAttribute() method.
// It can add or update an attribute.
// Example: element.setAttribute("class", "newClass");

// Q8: Can we change HTML content using JavaScript?
// Yes, using textContent or innerText.
// We can also use innerHTML.
// DOM allows dynamic content updates.
