const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  //   console.log(event.currentTarget.value);
  if (event.currentTarget.value === "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = event.currentTarget.value.trim();
  }
}

// console.log(inputEl);
// console.log(outputEl);
