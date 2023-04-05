// ==================== FUNÇÕES ====================
function sayMyName(name) {
    console.log('Seu nome é: ' + name);
}

sayMyName('Gabriel');

// ==================== QUADRADO DE UM VALOR ====================
function quadrado(valor) {
    return valor * valor;
}

const num = 7;
console.log('O quadrado de ' + num + ' é: ' + quadrado(num));

// ==================== INCREMENTA JUROS ====================
function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = valor * (percentualJuros / 100);
    return valor + valorDeAcrescimo;
}

console.log('Valor com juros acrescentado: R$' + incrementarJuros(100, 12));