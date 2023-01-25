// 1º
const aprovado = ['Joana', 'Kaio', 'Victor', 'Julia']
// ForEach podem ter 3 parametros nome, indice e array
aprovado.forEach(function(nome, indice){ 
  console.log(`${indice + 1}) ${nome}`)
})
//2º
aprovado.forEach(nome => console.log(nome))
//3º
const exibirAprovados = aprovado => console.log(aprovado)
aprovado.forEach(exibirAprovados)