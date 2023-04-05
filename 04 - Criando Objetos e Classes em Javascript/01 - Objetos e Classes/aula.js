// ==================== OBJETOS ====================
const fulano = {
    nome: 'Fulano da Silva',
    idade: 20,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }
}

// delete fulano.nome 
// comando para deletar esta chave e valor do objeto

fulano.apelido = 'Fuleco'
console.log(fulano.apelido);

fulano.descrever();

console.log(fulano);


// ==================== FORMAS DE ACESSAR OS ATRIBUTOS DO OBJETO ====================
console.log(fulano.nome);

console.log(fulano['nome']);


// ==================== CLASSES ====================
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade, anoDeNascimento) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }
}

function compararIdade(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade`);
    }
}

const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 22);
compararIdade(joao, maria);
maria.descrever();