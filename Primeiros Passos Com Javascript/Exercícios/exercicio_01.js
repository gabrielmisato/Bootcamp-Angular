// 1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

// Média = (nota_1 + nota_2 + nota_3) / 3;

// Classificação:
// - Média menor que 5, reprovação;
// - Média entre 5 e 7, recuperação;
// - Média acima de 7, passou de semestre;


const nota_1 = 9;
const nota_2 = 8;
const nota_3 = 7;

const media = (nota_1 + nota_2 + nota_3) / 3;
console.log('Nota: ' + media.toFixed(2));

if (media < 5) {
    console.log('Aluno reprovado!');
} else if (media >= 5 && media <= 7) {
    console.log('Aluno em recuperação.');
} else {
    console.log('Aluno aprovado!');
}
