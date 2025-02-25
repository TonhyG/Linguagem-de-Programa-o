// Função para calcular o montante com juros simples
function calcularJurosSimples(capital, taxa, tempo) {
    let montante = capital * (1 + taxa * tempo);  // Fórmula de juros simples
    return montante.toFixed(2);  // Retorna o montante com 2 casas decimais
}

// Função para calcular o montante com juros compostos
function calcularJurosCompostos(capital, taxa, tempo) {
    let montante = capital * Math.pow((1 + taxa), tempo);  // Fórmula de juros compostos
    return montante.toFixed(2);  // Retorna o montante com 2 casas decimais
}

// Testando as funções
let capitalInicial = 1000;
let taxaJuros = 0.05;  // 5% ao mês
let tempo = 12;  // 12 meses

console.log("Montante com Juros Simples: R$" + calcularJurosSimples(capitalInicial, taxaJuros, tempo));  // Exemplo de juros simples
console.log("Montante com Juros Compostos: R$" + calcularJurosCompostos(capitalInicial, taxaJuros, tempo));  // Exemplo de juros compostos
