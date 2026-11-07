function Atividade1() {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

function Atividade2() {
  let contador = 5;

  while (contador > 0) {
    console.log(contador);
    contador--;
    if (contador == 0) {
      console.log("Decolar!");
    }
  }
}

function atividade3() {
  for (let dia = 1; dia <= 7; dia++) {
    if (dia == 1 || dia == 7) {
      console.log("Dia " + dia + " Fim de semana!");
    } else {
      console.log("Dia " + dia + " Dia útil!");
    }
  }
}

function atividade4() {
  for (let hora = 1; hora <= 5; hora++) {
    if (hora >= 3 && hora <= 4) {
      console.log("Hora " + hora + ": Pico de calor!");
    }
  }
}

function atividade5() {
  let carga = 0;

  while (carga <= 100) {
    carga += 30;
    if (carga > 100) {
      console.log("Limite atingido!");
      break;
    } else {
      console.log("Carga atual: " + carga + " kg.");
    }
  }
}

function atividade6() {
  let bateria = 100;

  while (bateria > 0) {
    if (bateria === 100) {
      console.log("Bateria 100%");
    } else if (bateria <= 20 && bateria > 0) {
      console.log("Bateria fraca " + bateria + "%");
    } else {
      console.log("Bateria: " + bateria + "%");
    }
    bateria -= 20;
  }
}

console.log("Celular desligado!");

function atividade7() {
  for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0 || i % 10 === 4) {
      console.log("PIM!");
    } else {
      console.log(i);
    }
  }
}

function atividade8() {
  for (let vel = 60; vel <= 100; vel += 10) {
    if (vel <= 80) {
      console.log(vel + " km/h: Velocidade OK");
    } else if (vel > 80 && vel <= 90) {
      console.log(vel + " km/h: Multa leve");
    } else if (vel > 90 || vel === 100) {
      console.log(vel + " km/h: Multa grave!");
    }
  }
}
