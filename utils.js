function formatarNumero(num) {
  return num.toFixed(2).replace(".", ",");
}

function exibirResultado(valor) {
  console.log(`🧮 Resultado: ${formatarNumero(valor)}`);
}

function logOperacao(tipo) {
  const nomes = {
    soma: "Somando valores...",
    sub: "Subtraindo valores...",
    mult: "Multiplicando valores...",
    div: "Dividindo valores...",
  };
  console.log(nomes[tipo] || "Operação desconhecida");
}

module.exports = { formatarNumero, exibirResultado, logOperacao };
