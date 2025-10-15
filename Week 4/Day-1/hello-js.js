// hello-js.js
// A minimal hello script demonstrating JS runtime & scoping

const greeting = "Hello, JavaScript World!";
let runCount = 0;

function sayHello() {
  runCount++;
  console.log(`${greeting} Run #${runCount}`);
}

sayHello();
