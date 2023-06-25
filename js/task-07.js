const fontSizeControllerEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

function changeFontSize() {
  const currentFontSize = fontSizeControllerEl.value;
  console.log(currentFontSize);
  textEl.style.fontSize = `${currentFontSize}px`;
}

fontSizeControllerEl.addEventListener("input", changeFontSize);

textEl.style.fontSize = `${fontSizeControllerEl.value}px`;
