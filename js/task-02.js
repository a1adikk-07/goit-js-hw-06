const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulElem = document.getElementById("ingredients");

const elements = ingredients.map(function(ingredient) {
  const liElem = document.createElement("li");
  liElem.textContent = ingredient;
  liElem.classList.add("item");
  return liElem;
});

    ulElem.append(...elements);


