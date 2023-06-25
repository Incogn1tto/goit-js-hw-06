const changeColorBtn = document.querySelector(".change-color");
console.log(changeColorBtn);
const color = document.querySelector(".color");
console.log(color);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;

  color.textContent = randomColor;
});
