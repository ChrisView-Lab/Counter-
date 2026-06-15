"use strict";

let counter = 0;
const number = document.getElementById("number");

const buttons = document.querySelectorAll(".allButtons");
console.log(buttons);

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const style = button.classList;
    if (style.contains("minus")) {
      counter--;
    } else if (style.contains("plus")) {
      counter++;
    } else {
      counter = 0;
    }
    if (counter > 0) {
      number.style.color = "#06c622";
    } else if (counter < 0) {
      number.style.color = "#a710be";
    } else {
      number.style.color = "#1d30d5";
    }

    number.textContent = counter;
  });
});
//dark mode
let count = 0;
const title = document.getElementById("title");
const btdDark = document.getElementById("btn-dark");
const created = document.getElementById("created");
const darkmode = document.getElementById("dark-mode-text");

function changeMod() {
  if (count === 0) {
    document.body.style.backgroundColor = "var(--testo1-color)";
    title.style.color = "var(--sfondo-color)";
    number.style.color = "var(--sfondo-color)";
    created.style.color = "var(--sfondo-color)";
    darkmode.style.color = "var(--sfondo-color)";

    count++;
  } else {
    document.body.style.backgroundColor = "var(--sfondo-color)";
    title.style.color = "var(--testo1-color)";
    number.style.color = "var(--testo1-color)";
    created.style.color = "var(--testo1-color)";
    darkmode.style.color = "var(--testo1-color)";

    count--;
  }
}

btdDark.addEventListener("click", changeMod);
