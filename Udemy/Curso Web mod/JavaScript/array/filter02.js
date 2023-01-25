Array.prototype.filter2 = function(callback){
  const newArray = []
  for(let i = 0; i < this.length; i++){
    if(callback(this[i], i, this)){
      newArray.push(this[i])
    }
  }
  return newArray
}

const produto = [
  {nome: 'Notebook', preco: 2599, fragil: true},
  {nome: 'Ipad Pro', preco: 1499, fragil: true},
  {nome: 'Copo de Vidro', preco: 22.50, fragil: true},
  {nome: 'Copo de plastico', preco: 11.99, fragil: false}
]

const prodCaro = produto => produto.preco >= 500
const prodFragil = produto => produto.fragil

console.log(produto.filter2(prodCaro).filter2(prodFragil))