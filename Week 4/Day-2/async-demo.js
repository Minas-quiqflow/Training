// async-demo.js

// Simulated async fetch using setTimeout
function fakeFetch(url, delay = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "error") reject("Fetch failed!");
      else resolve({ data: `Response from ${url}` });
    }, delay);
  });
}

// Promise-based usage
fakeFetch("https://example.com", 500)
  .then((res) => console.log("Promise result:", res))
  .catch((err) => console.error("Promise error:", err));

// Async/Await version
async function runAsyncDemo() {
  try {
    const result = await fakeFetch("https://example.com/data", 700);
    console.log("Async/Await result:", result);
  } catch (error) {
    console.error("Caught error:", error);
  }
}

runAsyncDemo();
