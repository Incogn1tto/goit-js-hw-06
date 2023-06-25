const formObj = document.querySelector(".login-form");
const loginBtnEl = document.querySelector('.login-form button[type="submit"]');

console.log(formObj);
console.log(loginBtnEl);

formObj.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInputValue = formObj.elements.email.value;
  const passwordInputValue = formObj.elements.password.value;

  if (emailInputValue === "" || passwordInputValue === "") {
    alert("Будь ласка, заповніть всі поля");
    return;
  }
  const formInfo = {
    email: emailInputValue,
    password: passwordInputValue,
  };

  console.log(formInfo);

  formObj.reset();
});
