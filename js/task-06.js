
/* Zadanie 6
Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza jego zawartość na prawidłową liczbę wprowadzonych symboli.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Informacja o liczbie symboli, która powinna znajdować się w polu input, pokazuje się w jego atrybucie data-length.
Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielone, a jeśli liczba jest nieprawidłowa - czerwone.
Aby dodać style, używaj klas CSS valid i invalid, które już dodaliśmy do plików źródłowych zadania.

#validation-input {
border: 3px solid #bdbdbd;
}

#validation-input.valid {
border-color: #4caf50;
}

#validation-input.invalid {
border-color: #f44336;
}
*/
let inputValidate = document.getElementById("validation-input");

let totalLenght = inputValidate.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);

inputValidate.oninput = function() {
  if (inputValidate.value.length === intTotallenght) {
    inputValidate.classList.remove("invalid");
    inputValidate.classList.add("valid");
  }
  if (inputValidate.value.length === 0) {
    inputValidate.classList.remove("valid");
    inputValidate.classList.remove("invalid");
  }
  if (inputValidate.value.length !== intTotallenght && inputValidate.value.length !== 0) {
    inputValidate.classList.add("invalid");
  }
};