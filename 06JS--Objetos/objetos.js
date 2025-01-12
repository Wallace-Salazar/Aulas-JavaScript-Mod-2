// Crie um objeto que receba ao menos três propriedades sobre você.
let eu = {
  nome: "Sophia",
  idade: 22,
  corFavorita: "Azul"
};
console.log("Objeto original:");
console.table(eu);

// Adicione uma nova propriedade sem alterar seu objeto inicial.
eu.comidaFavorita = "Pizza";
console.log("Objeto com nova propriedade:");
console.table(eu);

// Remova uma propriedade desse objeto.
delete eu.idade;

//Mostre no console todas as propriedades desse objeto.
console.log("Objeto final, com remoção de propriedade:");
console.table(eu);

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
let cadastro = [{}, {}, {}, {}, {}];

//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
//Na propriedade amigos, adicione ao menos 4 itens.
cadastro = [
  {
    nome: "Mateus",
    idade: 19,
    telefone: "00000-0000",
    amigos: ["Amanda", "Ana", "Acácia", "Amarula"]
  },
  {
    nome: "Julia",
    idade: 20,
    telefone: "00000-0000",
    amigos: ["Bruno", "Bárbara", "Bianca", "Beatriz"]
  },
  {
    nome: "Catarina",
    idade: 21,
    telefone: "00000-0000",
    amigos: ["Carlos", "Carmen", "Consuelo", "Camila"]
  },
  {
    nome: "Angélica",
    idade: 22,
    telefone: "00000-0000",
    amigos: ["Denise", "Duda", "David", "Daniel"]
  },
  {
    nome: "Ricardo",
    idade: 23,
    telefone: "00000-0000",
    amigos: ["Eduardo", "Emerson", "Eliana", "Elenice"]
  }
];
console.log("Array com 5 objetos:");
console.table(cadastro);

// Mostre no console o nome de um amigo de cada lista.
for (let i = 0; i < cadastro.length; i++) {
  let f = Math.floor(Math.random() * cadastro[i].amigos.length);
  console.log(
    `${cadastro[i].nome} possui umx amigx que se chama ${cadastro[i].amigos[f]}`
  );
}
