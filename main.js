const spnText = document.querySelector(".text");
const txt =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? KONIEC";

let number = 0;
const addLetter = () => {
  spnText.textContent += txt[number];
  number++;
  if (number === txt.length) {
    clearInterval(indexTyping);
  }
};

const indexTyping = setInterval(addLetter, 50);
