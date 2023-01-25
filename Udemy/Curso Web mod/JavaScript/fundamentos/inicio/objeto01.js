const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = { // Objeto = atributos
  nome: 'Camisa Polo',
  preco: 79.90,
  obj: {
    descricao: 1,
    obj: {
      blabla: 2
    }
  }
}

'{"nome": "Camisa Polo", "preco": 79.98}' //JSON = texto

console.log(prod2)