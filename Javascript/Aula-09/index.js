//let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

numeros.forEach((n) => {
  console.log(n);
});

// elemento, indice
// para cada elemento -  faço alguma coisa
//para cada indice - faço alguma coisa

let nomes = ["Ana", "João", "maria", "juliana", "eduarda"];

nomes.forEach((elemento, indice) => {
  console.log(elemento);
  console.log(indice);
});

// MAP

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numeros.map((elemento) => {
  elemento * 2;
});

//const numeros2 = numeros.map((numeros) => numeros * 2);
console.log(numeros2);

let dobronumeros = numeros.map(function (numero) {
  return numero * 2;
});

console.log(dobronumeros);

// Filter()
//vai filtrar elementos do array
//de acordo com a condição e retornar um novo array

let idades = [18, 21, 20, 12, 15, 16];

console.log(idades.filter((idade) => idade >= 18));
console.log(numeros.filter((numero) => numero % 2 === 0));

//find()
//traz somente o primeiro elemento que se encaixar na condição
console.log(idades.find((idade) => idade >= 18));

//reduce()
//vai reduzir o array para um unico valor

let numeros2 = [1, 2, 3, 4, 5];

let reduzir = numeros2.reduce((acumulador, valoratual) => {
  return acumulador + valoratual;
}, 0);

console.log(reduzir);
