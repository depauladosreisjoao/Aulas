let pessoa = { nome: "jõao", idade: 20, programador: true };

pessoa.nome = "j.Pedro";
pessoa.idade = 127;
// criar nova propriedade no projeto
pessoa.casado = true;
// deletar propriedade no objeto
delete pessoa.casado;

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.casado);

//posso atribuir métodos (funções) no
const usoario = {
  nome: "joão",
  idade: 54,
  apresentar() {
    console.log(`nome do usuario é ${this.nome}`);
    console.log(`idade do usuario é ${this.idade}`);
  },
};

usuario.apresentar();

// representando caracteristicas de um objeto e metodos
let computador = {
  monitor: true,
  SO: "linux/windows",
  gabinete: true,
  memoriaRam: 16,
  memoria: 512,
  mouse: true,
  ligarComputador() {
    console.log("computador ligado");
  },
  abirNavegador() {
    console.log("abrir Navegador");
  },
};

// Desestruturação
//pego as caracteristicas do objetos e salvo todas em uma unica variavel

let gabinete = computador.gabinete;
let sistema = computador.SO;

const { monitor, gabinete } = computador;

console.log(monitor, SO);

let guardaRoupa = {
  porta: 6,
  gavetas: 5,
  espelho: true,
  abrirPortas() {},
  fecharPortas() {},
  abrirgavetas() {},
  fechagavetas() {},
};

//object.keys(objeto) - me traz todas as chaves do objeto
console.log(Object.keys(guardaRoupa));

// object.values(valores) - me traz os valores das chaves do objeto
console.log(Object.values(guardaRoupa));

// traz todas as chaves e o valor do objeto
console.log(Object.entries(guardaRoupa));

let lampada = {
  fabricante: "algin",
  ligarLampada() {},
};

// spread - espalhar as caracteristicas e metodos dos objetos em um outro objeto, sem alterar o original
const quarto = { ...computador, ...guardaRoupa, ...lampada };

console.log(quarto);
