const inputControls = document.querySelector("#controls");
const inputEl = inputControls.querySelector("input");
const createButton = inputControls.querySelector("[data-create]");
const destroyButton = inputControls.querySelector("[data-destroy]");
const boxEl = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const amount = Number(inputEl.value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    const newBoxSize = 30 + i * 10;

    newBox.style.width = `${newBoxSize}px`;
    newBox.style.height = `${newBoxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    boxEl.appendChild(newBox);
  }
}

function destroyBoxes() {
  while (boxEl.firstChild) {
    boxEl.removeChild(boxEl.firstChild);
  }
}
