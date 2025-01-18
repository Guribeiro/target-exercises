// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const invoicesInMonth = require('../dados.json')

const countDaysWithInvoicing = invoicesInMonth.filter(invoicing => invoicing.valor > 0).length

const montlhyInvoicesAvarage = invoicesInMonth.reduce((prev, current) => prev + current.valor, 0) / countDaysWithInvoicing

const lowestValue = invoicesInMonth.reduce((menor, atual) => Math.min(menor, atual.valor), invoicesInMonth[0].valor);

const highestValue = invoicesInMonth.reduce((maior, atual) => Math.max(maior, atual.valor), 0);

const countDayInvoiceValueIsHigherThenMontlhyAvarage = invoicesInMonth.filter(invoice => invoice.valor > montlhyInvoicesAvarage).length

console.log({
  lowestValue, 
  highestValue, 
  countDayInvoiceValueIsHigherThenMontlhyAvarage
})
