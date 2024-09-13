document.addEventListener("DOMContentLoaded", () => {
  console.log("temp.js has been loaded and executed.");

  // Initialize your web worker or other scripts here
  if (window.Worker) {
    const worker = new Worker("main.js");

    worker.onmessage = function (e) {
      console.log("Message from worker:", e.data);
      const totalElement = document.querySelector(".total");
      if (totalElement) {
        totalElement.textContent = `Total: ${e.data}`;
      }
    };

    worker.onerror = function (error) {
      console.error("Worker error:", error);
    };

    // Example: Sending initial data to worker if needed
    // worker.postMessage({ number1: 5, number2: 10 });
  } else {
    console.log("Your browser does not support Web Workers.");
  }
});
