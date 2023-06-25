const categoriesListEl = document.querySelector("#categories");
console.log("Number of categories:", categoriesListEl.children.length);

const categoriesItemsListEl = document.querySelectorAll(".item");

const getItemsInfo = (categoriesItemsListEl) => {
  let message = "";
  categoriesItemsListEl.forEach((item) => {
    const titleEl = item.querySelector("h2").textContent;
    const elementsLength = item.querySelectorAll("li").length;

    message += `Category: ${titleEl}\nElements: ${elementsLength}\n\n`;
  });

  return message;
};

console.log(getItemsInfo(categoriesItemsListEl));
