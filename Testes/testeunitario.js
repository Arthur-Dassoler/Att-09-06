function runUnitTests() {

  //Dentro das funções "calcularJurosCompostos", 1 = 100% assim como 0,08 = 8%

  // Teste de taxa 100%
  testar("Taxa 100%", () => {
    if (calcularJurosCompostos(4000, 1, 2) !== 16000) throw new Error("Esperado 16000")
  });

  // Teste de taxa 0
  testar("Taxa nula", () => {
    if (calcularJurosCompostos(4000, 0, 2) !== 4000) throw new Error("Esperado 4000")
  });

  // Teste de tempo 0
  testar("Tempo nulo", () => {
    if (calcularJurosCompostos(4000, 1, 0) !== 4000) throw new Error("Esperado 4000")
  });

  // Teste de capital 0
  testar("Capital nula", () => {
    if (calcularJurosCompostos(0, 1, 1) !== 0) throw new Error("Esperado 8000")
  });

  //
}