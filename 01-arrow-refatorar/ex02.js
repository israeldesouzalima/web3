function descobreDiametro(raio) {
  return 2 * raio;
}

const diametro01 = descobreDiametro(4);

console.log(`O diametro, cujo raio seja igual a 4, é: `, diametro01);

const descobreDiametroArrow = (raio) => {
  return 2 * raio;
};

const diametro02 = descobreDiametroArrow(12);

console.log(`O diametro, cujo raio seja igual a 12, é: `, diametro02);
