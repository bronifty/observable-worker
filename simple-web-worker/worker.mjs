import { inputs, total } from "./store.mjs";

// self.onmessage = function (e) {
//   console.log("Worker: Message received from main script");
//   const result = e.data[0] * e.data[1];
//   // inputs.value = { ...inputs.value, input1: e.data[0], input2: e.data[1] };
//   if (isNaN(result)) {
//     postMessage("Please write two numbers");
//   } else {
//     const workerResult = result;
//     console.log("Worker: Posting message back to main script");
//     postMessage(workerResult);
//   }
// };

self.onmessage = function (e) {
  console.log("Worker: Message received from main script");
  // const result = e.data[0] * e.data[1];
  inputs.value = { ...inputs.value, input1: e.data[0], input2: e.data[1] };
  if (isNaN(inputs.value.input1) && isNaN(inputs.value.input2)) {
    postMessage("Please write two numbers");
  } else {
    const workerResult = inputs.value;
    postMessage(workerResult);
  }
};
