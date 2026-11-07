// criando elemento com DOM
const titulo = document.createElement("h1");

// adicionando conteudo do texto para o elemento h1
titulo.textContent = "Este é um titulo criado com DOM";

// adicionando uma classe ao elemento h1
titulo.setAttribute("class", "titulo");

// adicionando o elemento ao body da pagina
document.body.appendChild(titulo);

// selecionando elemento especifico pelo seletor css
const div = document.querySelector(".div1");

//childNodes
// tras varias informações sobre o elemento em indices (Nodelist)
console.log(div.childNodes);

// children
// traz somente os elementos filhos (HTMLCollection)
console.log(div.children);

// adicionando novo elemento </p> na DIV
div.innerHTML += "<p> paragrafo adicionado com DOM </p>";

// adicionando
div.children[0].classList.add("blue");

// adicionar um novo elemento ao elemento Pai antes de um determiando elemento

const elementopai = document.querySelector(".div1");

const elementoReferencia = document.querySelector(".texto");

const novoelemento = document.createElement("h1");
novoelemento.textContent = "Novo elemento criado";

elementopai.insertBefore(novoelemento, elementoReferencia);
