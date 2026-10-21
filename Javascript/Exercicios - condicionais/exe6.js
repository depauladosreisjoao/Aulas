let ladoA = 10;
let ladoB = 20;
let ladoC = 30;

if (ladoA === ladoB && ladoB === ladoC) {
  console.log("Triangulo equilátero");
} else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
  console.log("triagulo escaleno");
} else {
  console.log("triagulo isósceles");
}
