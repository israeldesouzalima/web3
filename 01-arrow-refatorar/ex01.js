function saudacao(name, lastName) {
  console.log(`Olá ${name} ${lastName}, eu sou uma função!!`);
}

saudacao("João", "da Silva");

const saudacaoArrow = (name, lastName) =>
  console.log(`Olá ${name} ${lastName}, eu sou uma função!!`);

saudacaoArrow("João", "Santos");
