function runComponentTests() {

  // Teste de formulário
  testar("COMPONENT - Formulário deve estar presente na página", () => {
    const form = document.getElementById("form-calculo");
    if (!form) throw new Error("Formulário não encontrado");
  });

  //Teste dos inputs
  testar("COMPONENT - Inputs devem receber valores corretamente", () => {
    const input1 = document.getElementById("capital");
    const input2 = document.getElementById("taxa");
    const input3 = document.getElementById("tempo");

    input1.value = "10";
    input2.value = "5";
    input3.value = "3"

    if (input1.value !== "10" || input2.value !== "5" || input3.value !== "3") {
      throw new Error("Inputs não aceitaram valores corretamente");
    }
  });

  // Teste de submit do formulário
  testar("COMPONENT - Formulário dispara evento de submit", () => {
    const form = document.getElementById("form-calculo");
    let chamado = false;

    const listener = (e) => {
      chamado = true;
      e.preventDefault();
      form.removeEventListener("submit", listener);
    };

    form.addEventListener("submit", listener)
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));

    if (!chamado) throw new Error("Evento de submit não foi chamado")
  });

  // Teste de botão
  testar("COMPONENT - Botão de cálculo encontrado", () => {
    const botao = document.getElementById("botaocalculo")
    if (!botao) throw new Error("Botão não encontrado")
  });

  // Teste de resultado
  testar("COMPONENT - Resultado encontrado", () => {
    const resultado = document.getElementById("resultado");
    if (!resultado) throw new Error("Elemento de resultado não encontrado");
  })

  // Teste de funcionalidade do botão
  testar("COMPONENT - Botão de cálculo funciona", () => {
    const capital = document.getElementById("capital");
    const taxa = document.getElementById("taxa");
    const tempo = document.getElementById("tempo");
    const botao = document.getElementById("botaocalculo");
    const resultado = document.getElementById("resultado");

    capital.value = 4000;
    taxa.value = 1;
    tempo.value = 2;

    botao.click();

    const esperado = "4080";
    if (!resultado.textContent.includes(esperado)) {
      throw new Error(`Esperado que resultado contivesse "${esperado}", mas foi: "${resultado.textContent}"`);
    }
  })

  // Teste de exibição correta de resultado
  testar("COMPONENT - Exibição correta do resultado", () => {
    document.getElementById("capital").value = 4000;
    document.getElementById("taxa").value = 1;
    document.getElementById("tempo").value = 2;

    document.getElementById("botaocalculo").click();

    const texto = document.getElementById("resultado").textContent;
    if (!texto.includes("4080")) throw new Error("Esperado 4080, mas obtido " + texto);
  });
}