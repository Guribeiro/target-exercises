const invoicingByState = [
  { estado: 'SP', valor: 67836.43 },
  { estado: 'RJ', valor: 36678.66 },
  { estado: 'MG', valor: 29229.88 },
  { estado: 'ES', valor: 27165.48 },
  { estado: 'OUTROS', valor: 19849.53}
];

// Calcula o faturamento total
const invoicingTotal = invoicingByState.reduce((total, estado) => total + estado.valor, 0);

// Calcula o percentual de cada estado
const percentuais = invoicingByState.map(estado => ({
  estado: estado.estado,
  percentual: `${((estado.valor / invoicingTotal) * 100).toFixed(2)}%`
}));

console.log(percentuais);