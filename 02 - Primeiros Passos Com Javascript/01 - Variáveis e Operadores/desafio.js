// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas:
//     1 - Preço do combustível;
//     2 - Gasto médio de combustível do carro por KM;
//     3 - Distância em KM da viagem;

//     Imprima no console o valor que será gasto para realizar esta viagem.


// Entradas
const precoCombustivel = 5.54;
const gastoMedioPorKm = 4;
const distanciaEmKm = 80;

// Saídas
const litrosConsumidos = distanciaEmKm / gastoMedioPorKm;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2)); // comando .toFixed() é a quantidade de número de casas decimais
