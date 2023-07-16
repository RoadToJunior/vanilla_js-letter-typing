const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const btn = document.querySelector("button");
const txt =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? KONIEC";

let number = 0;
const time = 40;

const addLetter = () => {
  spnText.textContent += txt[number];
  number++;
  if (number === txt.length) {
    clearInterval(indexTyping);
  }
};

const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);
