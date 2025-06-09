const form = document.getElementById('form-calculo');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // evita o envio do formulário (recarregar a página)

  // Pega os valores dos inputs e converte para números
  const capital = parseFloat(document.getElementById('capital').value);
  const taxa = parseFloat(document.getElementById('taxa').value) / 100; // converte % para decimal
  const tempo = parseInt(document.getElementById('tempo').value);

  // Fórmula juros compostos: M = C * (1 + i)^t
  const montante = capital * Math.pow(1 + taxa, tempo);

  // Exibe o resultado formatado com 2 casas decimais
  resultadoDiv.textContent = `Montante após ${tempo} período(s): R$ ${montante.toFixed(2)}`;
});