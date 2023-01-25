// Object.preventExtensions - Não permite adicionar novos objetos
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

produto.nome = 'Borracha'
produto.desc = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal - Sela um objeto não deixando adicionar e excluir, apenas modificar atributos
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freezer - selado + valores constantes

