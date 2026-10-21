// AND -mAs duas condições precisam ser verdadeiras para a condição inteira ser verdadeira (true)

// V V = V
// V F = F
// F F = F
//F v = F

if (10 > 5 && 8 < 10) {
  alert("verdadeiro");
}

// OR - || - A condição será verdadeira se ao menos uma das condições for verdadeira

// V V = V
// V F = V
// F V = V
//F F = F

if (10 > 5 || 10 > 100) {
  alert("Verdadeiro com OR");
}
