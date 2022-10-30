/*Zadanie 9
Napisz skrypt, który zmienia kolor tła elementu <body> poprzez style inline po kliknięciu na button.change-color i wprowadza wartość koloru do span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215) .toString(16) .padStart(6, 0)}`;
}
*/


const getRandomHexColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
}

const button = document.querySelector("button");
const randomHex = document.querySelector("span");

button.addEventListener("click", () => {
  randomHex.textContent = "#" + getRandomHexColor();
  document.body.style.backgroundColor = "#" + getRandomHexColor();
});

