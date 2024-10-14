function generarCodigo() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    const a = letras[Math.floor(Math.random() * 10)];
    const uno = numeros[Math.floor(Math.random() * 10)]
    const b = letras[Math.floor(Math.random() * 10)];
    const dos = numeros[Math.floor(Math.random() * 10)]
    const c = letras[Math.floor(Math.random() * 10)];
    const d = letras[Math.floor(Math.random() * 10)];

    const codigo = [a, uno, b, dos, c, d];
    return codigo.join('');
}

export default generarCodigo;