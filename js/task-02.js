/*Napisz skrypt, który dla każdego elementu tablicy ingredients:

Utworzy oddzielny element <li>. Koniecznie użyj metody document.createElement().
Doda nazwę elementu jako jego zawartość tekstową.
Doda do elementu klasę item.
Po czym umieści wszystkie <li> na liście podczas jednej operacji ul#ingredients.
*/


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsArr = document.getElementById("ingredients")

const ingredientsList = ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  items.innerHTML = ingredient;
  ingredientsArr.append(items)
});

console.log(ingredientsArr);