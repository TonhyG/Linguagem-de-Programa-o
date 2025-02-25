function divisivelPorTres(numero) {
    // Verifica se o número é divisível por 3
    return numero % 3 === 0;
}

// Testando a função
console.log(divisivelPorTres(9));  // true
console.log(divisivelPorTres(10)); // false
console.log(divisivelPorTres(15)); // true
