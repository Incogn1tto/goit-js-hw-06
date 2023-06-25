let counterValue = 0;

const decreaseBtnEl = document.querySelector('[data-action="decrement"]');
const increaseBtnEl = document.querySelector('[data-action="increment"]');
const counterPrivateValueEl = document.querySelector("#value");

decreaseBtnEl.addEventListener("click", () => {
  counterValue -= 1;
  counterPrivateValueEl.textContent = counterValue;
});
increaseBtnEl.addEventListener("click", () => {
  counterValue += 1;
  counterPrivateValueEl.textContent = counterValue;
});
