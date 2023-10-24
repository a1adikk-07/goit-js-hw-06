const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const liElem = document.getElementById("ingredients");

let html = "";
ingredients.forEach(function(ingredient) {
  html += `<li class="item">${ingredient}</li>`;
});
liElem.innerHTML = html;

