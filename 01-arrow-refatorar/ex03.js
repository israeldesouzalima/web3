// Dados
let carrinho = [
  { nome: "abacaxi", preco: "2.00" },
  { nome: "detergente", preco: "2.50" },
  { nome: "bolacha", preco: "3.80" },
];

let itens = ["abacaxi", "banana", "maçã", "laranja", "limão"];

let palavroes = [
  "Inconstitucionalíssimo",
  "Otorrinolaringologista",
  "Pneumoultramicroscopicossilicovulcanoconiose",
  "Oftalmotorrinolaringologista",
];

// Item 01. Antes:

carrinho.forEach(function (produto) {
  imprimeProduto(produto.nome, produto.preco);
});

function imprimeProduto(nome, preco) {
  console.log("Produto: " + nome + " | " + "Preço: " + preco);
}

// Apos:

carrinho.forEach((produto, indice) => {
  console.log(`Produto ${indice}: ${produto.nome} | Preço: ${produto.preco}`);
});

// Item 02. Antes:

itens.forEach(function (item) {
  console.log(item);
});

// Após:
item.forEach((item) => console.log(item));

// Item 03. Toda função declarada no escopo global possui o objeto `window` como valor do `this`. Por que acontece isso?
/**
 *
 */

// Item 04. Antes:

let tamanhos = palavroes.map(function (palavrao) {
  return palavrao.length;
});
console.log(tamanhos); // [ 22, 22, 44, 28 ]

// Após:
palavroes.map((palavrao) => console.log(palavrao.length));

// Item 05. Antes:

var equipe = {
  nome: "Valentes da Glória",
  membros: ["Luciano", "Maria", "Virgínia", "Daniela"],
  imprimeNomes: function () {
    var that = this;
    this.membros.forEach(function (membro) {
      console.log(membro + " é da equipe " + that.nome);
    });
  },
};

equipe.imprimeNomes();

// Depois:

const equipe2 = {
  nome: "Valentes da Glória",
  membros: ["Luciano", "Maria", "Virgínia", "Daniela"],

  imprimeNomes() {
    this.membros.forEach((membro) => {
      console.log(`${membro} é da equipe ${this.nome}`);
    });
  },
};
