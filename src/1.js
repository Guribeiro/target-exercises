// Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

function run() {
  const INDICE = 13 
  let SOMA = 0
  let K = 0;

  while(K < INDICE) {
    K++

    SOMA+= K
  }
  console.log({INDICE, SOMA, K})
}

run()