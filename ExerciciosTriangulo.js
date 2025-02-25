function classificarTriangulo(lado1, lado2, lado3) {
    // Verifica se os lados formam um triângulo válido
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        return 'Valores inválidos para um triângulo';
    }

    // Classificação dos triângulos
    if (lado1 === lado2 && lado2 === lado3) {
        return 'Equilátero';
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        return 'Isósceles';
    } else {
        return 'Escaleno';
    }
}

// Testando a função
console.log(classificarTriangulo(3, 3, 3));  // Equilátero
console.log(classificarTriangulo(3, 4, 3));  // Isósceles
console.log(classificarTriangulo(3, 4, 5));  // Escaleno
