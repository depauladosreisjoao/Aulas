//SWitch case - usado

let estado = prompt("Digite a sigla do estado");

switch (estado.toUpperCase()) {
  case "sp":
    alert("Estado de são paulo");
    break;
  case "RJ":
    alert("Estado do rio de janeiro");
  case "MG":
    alert("estado de minas gerais");
    break;
  case "BA":
    alert("Estado da bahia");
  default:
    alert("algo de errado");
    break;
}
