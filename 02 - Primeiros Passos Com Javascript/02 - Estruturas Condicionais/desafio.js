// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//     1 - Preço do etanol;
//     2 - Preço da gasolina;
//     3 - O tipo de combustível que está no seu carro;
//     4 - Gasto médido de combustível do carro por KM;
//     5 - Distância em KM da viagem;

//     Imprima no console o valor que será gasto para realizar esta viagem.Distância


// Entradas
const precoEtanol = 4.87;
const precoGasolina = 5.54;
const litrosPorKm = 6;
const distanciaViagem = 200;
const tipoCombustivelDoCarro = 'Gasolina';

// Saídas
const litrosUtilizados = 200 / 6;
let valorGasto;

if (tipoCombustivelDoCarro == 'Gasolina') {
    valorGasto = litrosUtilizados * precoGasolina;
    console.log('O valor gasto é de R$' + valorGasto.toFixed(2));
} else if (tipoCombustivelDoCarro == 'Etanol') {
    valorGasto = litrosUtilizados * precoEtanol;
    console.log('O valor gasto é de R$' + valorGasto.toFixed(2));
} else {
    console.log('Tipo de combustível desconhecido')
}
