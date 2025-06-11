function runUnitTests() {

  //Dentro das funções "calcularJurosCompostos", o valor do meio, no caso a taxa, esta definida sendo 1 = 100% logo, 0,08 = 8%, 0.535 = 53.5% e assim por diante

  // Teste de taxa 100%
  testar("UNIT - Taxa 100%", () => {
    if (calcularJurosCompostos(4000, 1, 2) !== 16000) throw new Error("Esperado 16000")
  });

  // Teste de taxa 0
  testar("UNIT - Taxa nula", () => {
    if (calcularJurosCompostos(4000, 0, 2) !== 4000) throw new Error("Esperado 4000")
  });

  // Teste de tempo 0
  testar("UNIT - Tempo nulo", () => {
    if (calcularJurosCompostos(4000, 1, 0) !== 4000) throw new Error("Esperado 4000")
  });

  // Teste de capital 0
  testar("UNIT - Capital nula", () => {
    if (calcularJurosCompostos(0, 1, 1) !== 0) throw new Error("Esperado 0")
  });

  // Teste de decimais
  testar("UNIT - Números decimais", () => {
    const resultado = calcularJurosCompostos(2.5, 0.535, 5)
    const esperado = 21.31
    if (Math.abs(resultado - esperado) > 0.01) throw new Error(`Esperado ${esperado}, obtido ${resultado}`)
  });

  // Teste de valores muito baixos
  testar("UNIT - Numeros muito pequenos", () => {
    const resultado = calcularJurosCompostos(0.0001, 0.05, 10);
    const esperado = 0.0001 * (1.05) ** 10;

    const arredondar = valor => Math.round(valor * 1e8) / 1e8; // 8 casas decimais

    if (arredondar(resultado) !== arredondar(esperado)) {
      throw new Error(`Esperado ${arredondar(esperado)}, obtido ${arredondar(resultado)}`)
    }
  });

  // Teste geral
  testar("UNIT - 3 varíaveis funcionando (capital, taxa e tempo)", () => {
    const resultado = calcularJurosCompostos(4000, 0.1, 12)
    const esperado = 12553.71;
    if (Math.abs(resultado - esperado) > 0.01) throw new Error(`Esperado ${esperado}, obtido ${resultado}`)
  })

  // Teste de caracteres
  testar("UNIT - Caracteres não são aceitos", () => {
    const capital = Number(document.getElementById("capital").value);
    const taxa = Number(document.getElementById("taxa").value);
    const tempo = Number(document.getElementById("tempo").value);

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
      throw new Error("Esperado números");
    }
  })

  // Teste de negativos
  testar("UNIT - Números negativos não são aceitos", () => {
    const capital = Number(document.getElementById("capital").value);
    const taxa = Number(document.getElementById("taxa").value);
    const tempo = Number(document.getElementById("tempo").value);

    if ((capital < 0) || (taxa < 0) || (tempo < 0)) {
      throw new Error("Esperado somente números positivos");
    }
  })
}