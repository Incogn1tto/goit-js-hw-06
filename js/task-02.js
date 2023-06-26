const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

// ingredients.forEach((item) => {
//   const ingredientItemEl = document.createElement("li");
//   ingredientItemEl.textContent = item;
//   ingredientItemEl.classList.add("item");
//   ingredientsListEl.appendChild(ingredientItemEl);
// });

const listEl = ingredients.map((ingredient) => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = ingredient;
  listItemEl.classList.add("item");
  return listItemEl;
});

ingredientsListEl.append(...listEl);
