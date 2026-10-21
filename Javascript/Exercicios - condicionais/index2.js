let idade = 20;

if (idade < 12) {
  console.log("Criança");
} else if (idade > 12 && idade < 17) {
  console.log("Adolecente");
} else if (idade > 18 && idade < 59) {
  console.log("Adulto");
} else if (idade > 60) {
  console.log("Idoso");
} else {
  console.log("Algo de errado, tente novamente!");
}
