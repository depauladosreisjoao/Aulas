let idadeparavoto = 71;

if (idadeparavoto < 16) {
  console.log("não pode votar.");
} else if (
  (idadeparavoto >= 16 && idadeparavoto <= 17) ||
  idadeparavoto >= 70
) {
  console.log("Voto opcional");
} else if (idadeparavoto >= 18 && idadeparavoto < 70) {
  console.log("Voto obrigatorio");
} else {
  console.log("Algo deu errado, tente novamete!");
}
