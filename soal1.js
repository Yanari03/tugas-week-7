// soal1.js

const shapeModule = require("./shapeModule");

const squareSide = 5;
console.log("Luas Persegi:", shapeModule.calculateSquareArea(squareSide));
console.log(
  "Keliling Persegi:",
  shapeModule.calculateSquarePerimeter(squareSide)
);

const rectangleLength = 4;
const rectangleWidth = 6;
console.log(
  "Luas Persegi Panjang:",
  shapeModule.calculateRectangleArea(rectangleLength, rectangleWidth)
);
console.log(
  "Keliling Persegi Panjang:",
  shapeModule.calculateRectanglePerimeter(rectangleLength, rectangleWidth)
);
