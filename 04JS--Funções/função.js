//1 - crie uma função que exiba uma mensagem no console

function message() {
  console.log("Aqui temos uma mensagem no console!");
}

message();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

let nome = prompt("Me diga seu nome");

function exibeNome(nome) {
  console.log(`Olá, ${nome}!`);
}

exibeNome(nome);

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

let idade = prompt("Qual sua idade?");
let estiloMusical = prompt("Qual seu estilo musical favorito?");

function mensagem(nome, idade, musica) {
  console.log(
    `Olá, ${nome}! Verificamos aqui que você tem ${idade} anos de idade e gosta de ouvir ${musica}!`
  );
}

mensagem(nome, idade, estiloMusical);

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

let filmeRuim = prompt("Me diga um filme que você não gosta");
let musicaRuim = prompt("Me diga uma música que você não gosta");

function outraMensagem(filme, musica) {
  console.log(
    `Hmmm, verificamos aqui também que não gosta do filme "${filme}" e não aguenta mais ouvir a música "${musica}"... é verdade?`
  );
}

outraMensagem(filmeRuim, musicaRuim);

// BÔNUS
//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

let numb = prompt("Escolha um número");
let mult = 3;

function triple(n) {
  console.log(`O triplo do número que você escolheu é ${mult * n}`);
}

triple(numb);
