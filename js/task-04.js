/*Zadanie 4
Licznik składa się ze spana i przycisków, które, po ich kliknięciu, powinny zwiększać i zmniejszać jego wartość na jednostkę.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i inicjalizuj wartość 0.
Dodaj click listeners do przycisków, wewnątrz których zwiększaj i zmniejszaj wartość licznika.
Aktualizuj interfejs nową wartością zmiennej counterValue.*/

const button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};

let counterValue = 0;

const increment = () => {
  counterValue += 1;
 button.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  button.span.textContent = counterValue;
};

button.sub.addEventListener("click", increment);
button.add.addEventListener("click", decrement);