/*
Napisz skrypt, który:

Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.
Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).
W konsekwencji, w wierszu poleceń znajdą się takie komunikaty.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/


const categoriesAll = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesAll.length}`); 


const categoryItem = [...categoriesAll]
  .map(
      categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}
`
).join("\n");
console.log(categoryItem)  
