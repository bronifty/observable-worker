import { inputs, total } from "./store.mjs";

const form = document.querySelector("form");
const controlledInput1 = document.querySelector("#controlledInput1");
const controlledInput2 = document.querySelector("#controlledInput2");
const result = document.querySelector("#result");

[controlledInput1, controlledInput2].forEach((input) => {
  input.addEventListener("change", (e) => {
    result.textContent =
      Number(inputs.value) || 0 + Number(controlledInput2.value) || 0;
  });
});

controlledInput2.addEventListener("input", (e) => {
  result.textContent =
    Number(controlledInput1.value) || 0 + Number(controlledInput2.value) || 0;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent =
    Number(controlledInput1.value) || 0 + Number(controlledInput2.value) || 0;
});
