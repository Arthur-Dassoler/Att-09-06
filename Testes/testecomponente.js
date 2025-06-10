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

    form.addEventListener("submit", listener);
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));

    if (!chamado) throw new Error("Evento de submit não foi chamado");
  });


}