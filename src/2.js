// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
// sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
// escreva um programa na linguagem que desejar onde, informado um número, 
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function fibonacci(num = 34) {
  if (num < 0 || !Number.isInteger(num)) {
    console.error("Número inválido. Por favor, insira um número inteiro positivo.");
    return;
  }

  let a = 0 
  let b = 1
  let temp;
  console.log("Sequência de Fibonacci a partir de", num, ":");
  while (a <= num) {
    if (a === num) {
      return;
    }

    temp = a + b;
    a = b;
    b = temp;
  }

  console.log("O número", num, "não pertence à sequência de Fibonacci.");
}

fibonacci()
