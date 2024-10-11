const btn = document.getElementById("btn");
const ImageContainer = document.getElementById("boxes");
console.log(btn, ImageContainer);

const createBox = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      ImageContainer.append(box);
    }
  }
};

createBox();

btn.addEventListener("click", () => ImageContainer.classList.toggle("big"));
