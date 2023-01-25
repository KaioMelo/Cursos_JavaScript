const nums = [1, 2, 3, 4, 5]

// For com propósito
let result = nums.map(function(e){
  return e * 2
})

console.log(result)

const soma10 = e => e + 10
const triplica = e => e * 3
const real = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = nums.map(soma10).map(triplica).map(real)
console.log(result)