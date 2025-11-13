const { calcular } = require("./calculadora");

console.log("=== Aplicação de Cálculos Refatorada ===");
try {
  calcular("soma", 10, 5);
  calcular("div", 12, 0);
} catch (err) {
  console.error("Erro:", err.message);
}
