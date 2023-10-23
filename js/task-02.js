const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const liElem = document.getElementById("ingredients");

ingredients.forEach(function(ingredient) {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  liElem.appendChild(li);
});
