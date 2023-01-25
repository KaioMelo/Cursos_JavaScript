// Função sem retorno

function imprimirSoma(a, b){
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // pode passar 1 mas o calculo ira da NuN
imprimirSoma(2, 20, 3, 5, 7) // ignora os restantes

// Função com retorno

function soma(a, b = 1){
  return a + b
}

console.log(soma(2, 3))
console.log(soma(2))