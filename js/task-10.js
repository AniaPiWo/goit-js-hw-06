/* 
Zadanie 10 (nieobowiązkowe)
Napisz skrypt tworzenia i usuwania kolekcji elementów. Użytkownik wprowadza liczbę elementów do input i naciska przycisk Utwórz, co rozpoczyna tworzenie się kolekcji. Po naciśnięciu przycisku Usuń, kolekcja elementów zostaje usunięta.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Utwórz funkcję createBoxes(amount), która bierze jeden parametr - liczbę. Funkcja tworzy tyle <div>, ile ukazano w amount i dodaje je do div#boxes.

Wymiary pierwszego <div> - 30px na 30px.
Każdy następny element powinien być szerszy i wyższy od poprzedniego o 10px.
Wszystkie elementy powinny mieć losowy kolor tła w formacie NEX. Użyj gotowej funkcji getRandomHexColor aby otrzymać kolor.
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215) .toString(16) .padStart(6, 0)}`;
} */


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');

document.querySelector('#controls button[data-create]').addEventListener('click', function() {
  
  boxes.innerHTML = null;
  
  const numberOfBoxes = document.querySelector('#controls input[type=number]').value;
  
  createBoxes( numberOfBoxes );
  
});

document.querySelector('#controls button[data-destroy]').addEventListener('click', function() {
  
  boxes.innerHTML = null;
  
});

function createBoxes( numberOfBoxes ) {
  
  if ( numberOfBoxes >= 1 && numberOfBoxes <= 100 ) {
    
    for ( let i = 1; i <= numberOfBoxes; i++ ) {
      
      boxes.insertAdjacentHTML("beforeend", `<div style="width: ${Math.floor( ( i * 10 ) + 20 )}px; height: ${Math.floor( ( i * 10 ) + 20 )}px; background-color: ${getRandomHexColor()}; margin: 10px; border: 1px solid black;"></div>`);
    
    }
  
  } else {
    
    boxes.insertAdjacentHTML("beforeend", `<p>Liczba musi byc wieksza niz 1 i mniejsza niz 100</p>`);
    
  }
  
}