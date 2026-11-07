const h1 = document.getElementById("texto1");

// estilos atarves do atributo style
h1.style.color = "red";
h1.style.border = "1px solid green";
h1.style.backgroundColor = "#f2f2f2";

// estilos atraves de classes (classlist - adicionar ou remover)
const h12 = document.getElementById("texto2");

h12.classList.add("red");
h12.classList.remove("red");
