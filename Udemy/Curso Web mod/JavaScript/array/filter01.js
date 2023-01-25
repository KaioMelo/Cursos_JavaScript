const produto = [
  {nome: 'Notebook', preco: 2599, fragil: true},
  {nome: 'Ipad Pro', preco: 1499, fragil: true},
  {nome: 'Copo de Vidro', preco: 22.50, fragil: true},
  {nome: 'Copo de plastico', preco: 11.99, fragil: false}
]

console.log(produto.filter(function(p){
  return false
}))

const prodCaro = produto => produto.preco >= 500
const prodFragil = produto => produto.fragil

console.log(produto.filter(prodCaro).filter(prodFragil))