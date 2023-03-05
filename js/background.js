//랜덤 배경 이미지
const backgroundAll = document.querySelector("body");

const images = ["1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

backgroundAll.appendChild(bgImage);
