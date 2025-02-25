function encontrarMenorEMaior(vetor) {
    // Verifica se o vetor não está vazio
    if (vetor.length === 0) {
        console.log('O vetor está vazio');
        return;
    }

    // Encontrando o menor e o maior número no vetor
    let menor = Math.min(...vetor);
    let maior = Math.max(...vetor);

    // Exibe o menor e o maior número
    console.log('Menor número:', menor);
    console.log('Maior número:', maior);
}

// Testando a função
let numeros = [10, 2, 35, 4, 78, -5, 0];
encontrarMenorEMaior(numeros);
