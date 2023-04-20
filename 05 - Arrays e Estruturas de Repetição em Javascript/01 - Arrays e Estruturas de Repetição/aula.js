// ========== DECLARAÇÃO DE ARRAYS ==========
const alunos = ['João', 'Maria', 'Tiago'];


// ========== ADICIONANDO E EXCLUINDO ELEMENTOS DE UM ARRAY ==========
alunos.push('André'); // comando para adicionar um elemento
console.log(alunos);

alunos.pop(); // comando para remover o último elemento
alunos.shift(); // comando para remover o primeiro elemento
console.log(alunos);


// ========== PERCORRENDO UMA STRING ==========
const nome = 'Jailson Mendes'

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}


// ========== CALCULANDO A MÉDIA DE UM ALUNO ==========
const notas = [];

notas.push(6);
notas.push(9);
notas.push(5);
notas.push(8);
notas.push(7);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota;
}

const media = soma / notas.length;

console.log(`A média do aluno é ${media.toFixed(2)}`);
