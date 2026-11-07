// obter elemento HTML pelo ID

const elemento = document.getElementById("texto1");

//console.log(elemento);

// obter elementos pela classe (posso ter mais de um elemento)

const textos = document.getElementsByClassName("texts");

//console.log(textos);

// obter elemento pelo nome da tag

const paragrafos = document.getElementsByTagName("p");

//console.log(paragrafos);

//obter elemento com alta precisão

const seletor = document.querySelector(".texts2");

//console.log(seletor);

//obter varios elementos com querySelector

const elementosQuery = document.querySelectorAll(".texts");

//console.log(elementosQuery);

//acessando elementos filhos
// children - traz um htmlCollection com os elementos filho

const div1 = document.querySelector("div1");

//console.log(div1.children);
//console.log(div1.childNodes);

// InnerHtml - permitr com que eu modifique o html elementos (adicionar tags, textos, etc...)

div1.innerHTML = "<p> Elemento criado </p>";
div1.innerHTML = "<p> Elemento 2 criado </p>";

const paragrafo1 = document.getElementById;

// definindo atributos

const h2 = document.querySelectorAll("h2");
h2[0].setAttribute("classe", "h2");
h2[0].setAttribute("id", "h2");
h2[0].removeAttribute("id");

console.log(h2);

// obtendo valores dos atributos

console.log(div1.getAttribute("class"));
