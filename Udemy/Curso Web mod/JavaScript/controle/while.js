function getInteiroAleatorioEntre(min, max){
  const valor = Math.random() * (max - min) + min
  return opcao = 0
}

let opcao = 0

while(opcao != -1){
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}`)
}

console.log('Até a próxima!')