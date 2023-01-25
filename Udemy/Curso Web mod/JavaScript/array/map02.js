const carrinho = [
  '{"nome": "borracha", "preco": 3.45}',
  '{"nome": "caderno", "preco": 10.45}',
  '{"nome": "lapis", "preco": 1.75}',
  '{"nome": "caneta", "preco": 2.55}'
]

// Retornar um array epenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const result = carrinho.map(paraObjeto).map(apenasPreco)
console.log(result)
