//Variables & Data Types
let name = "Alice";     // string
const age = 25;         // number
let isStudent = true;   // boolean

//Loops
/*
for loop
while loop
for...of (arrays)
for...in (objects) 
*/
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//Functions
function greet(name) {
  return "Hello, " + name;
}

const add = (a, b) => a + b;

//DOM Basics
/*
Access elements: getElementById, querySelector
Change content: .textContent, .innerHTML
Change style: .style
Listen to events: .addEventListener 
*/
document.getElementById("myBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

