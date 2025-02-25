function formatarMoeda(valor) {
    // Corrige o valor para 2 casas decimais
    let valorFormatado = valor.toFixed(2);
    
    // Substitui o ponto por vírgula
    valorFormatado = valorFormatado.replace('.', ',');
    
    // Adiciona o símbolo 'R$' antes do valor
    return 'R$' + valorFormatado;
}

// Testando a função
let valor = 0.30000000000000004;
console.log(formatarMoeda(valor));  // Saída: R$0,30
