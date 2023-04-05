// 1 - Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
// Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
// gasto em reais para realizar este percurso.


class Carro {
    marca;
    cor;
    litrosPorKm;

    constructor(marca, cor, litrosPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.litrosPorKm = litrosPorKm;
    }

    calcularGastoDePercurso(km, precoCombustivel) {
        return km * this.litrosPorKm * precoCombustivel;
    }
}

const corola = new Carro('Toyota', 'Preto', 5 / 12);
console.log('A viagem custará R$' + corola.calcularGastoDePercurso(70, 5.54).toFixed(2));

const opala = new Carro('Nissan', 'Prata', 9 / 15);
console.log('A viagem custará R$' + opala.calcularGastoDePercurso(70, 5.54).toFixed(2));