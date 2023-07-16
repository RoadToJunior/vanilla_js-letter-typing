const spnText = document.querySelector(".text");
const btn = document.querySelector("button");
const txt =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? KONIEC";

let number = 0;
let indexTyping;

const addLetter = () => {
  spnText.textContent += txt[number];
  number++;
  if (number === txt.length) {
    clearInterval(indexTyping);
  }
};

btn.addEventListener("click", () => {
  indexTyping = setInterval(addLetter, 50);
});
