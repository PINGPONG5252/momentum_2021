const images = [
  "GI1.png",
  "GI2.png",
  "GI3.png",
  "GI4.png",
  "GI5.png",
  "GTA1.png",
];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const pnImage = document.createElement("img");

//const pnImage = document.createElement("img");

pnImage.src = `img/${choosenImage}`;

document.body.appendChild(pnImage);
