const inputEl = document.querySelector("#validation-input");
const requiredLengthEl = inputEl.getAttribute("data-length");

// console.log(inputEl);
// console.log(requiredLength);

inputEl.addEventListener("blur", () => {
  const isValid = inputEl.value.length === Number(requiredLengthEl);
  //   inputEl.classList.toggle ? ("valid", isValid) : ("invalid", !isValid);
  inputEl.classList.toggle("valid", isValid);
  inputEl.classList.toggle("invalid", !isValid);
});
