function getInteiroAleatorioEntre(min, max){
  const valor = Math.random() * (max - min) + min
  return opcao = 0
}

let opcao = 0

do{
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}`)
}while(opcao != -1)

console.log('Até a próxima!')