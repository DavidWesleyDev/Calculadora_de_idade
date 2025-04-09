alert ('Olá, esse programa calcula idade');             //mensagem de alerta informando que esse programa calcula a idade.

let nome = prompt('Qual é o seu nome ?');
alert('Olá ' + nome);

let anoDeNascimento = Number(prompt(nome + ' Qual o ano do seu nascimento?'));
let anoAtual = Number(prompt (nome + ' Em que ano estamos?'));

let idade = anoAtual - anoDeNascimento;

if (idade >= 18) {
    alert(nome + ' Você é maior de idade!');

} else {
    alert (nome + ' Você é menor de idade');
};