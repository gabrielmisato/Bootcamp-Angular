// ========== FUNÇÕES AUXILIARES ==========
const entradas = [20, 5, 50, 10, 98, 23, 67, 93, 1, 7, 54];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}


// ========== EXPORTAÇÃO DO OBJETO ==========
module.exports = { gets, print };