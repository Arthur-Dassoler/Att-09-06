function calcularJurosCompostos(capital, taxa, tempo) {
return capital * Math.pow(1 + taxa, tempo);
}