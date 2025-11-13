const { logOperacao, exibirResultado } = require("./utils");

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) throw new Error("Divisão por zero não permitida");
  return a / b;
}

function calcular(tipo, a, b) {
  logOperacao(tipo);

  const operacoes = {
    soma: somar,
    sub: subtrair,
    mult: multiplicar,
    div: dividir,
  };

  const operacao = operacoes[tipo];
  if (!operacao) throw new Error("Operação inválida");

  const resultado = operacao(a, b);
  exibirResultado(resultado);
  return resultado;
}

module.exports = { calcular };
