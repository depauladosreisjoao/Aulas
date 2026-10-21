let peso = 67.54;
let altura = 1.57;
let imc = peso / (altura * altura);

console.log("seu imc é:" + imc.toFixed(2));

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && 24.9) {
  console.log("peso normal");
} else if (imc >= 25 && 29.9) {
  console.log("sobrepeso");
} else if (imc >= 30) {
  console.log("obesidade");
} else {
  console.log("Algo deu errado, tente novamente!");
}
