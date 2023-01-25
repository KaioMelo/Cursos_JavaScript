const pessoa = {
  nome: 'Joana',
  idade: 24,
  peso: 56
}

console.log(Object.keys(pessoa)) // Busca chave do objeto
console.log(Object.values(pessoa)) // Busca valores do objeto
console.log(Object.entries(pessoa)) // Busca chave e valores

// Antiga forma 
// Object.entries(pessoa).forEach(a =>{
//   console.log(`${a[0]}: ${[a[1]]}`)
// })

// Nova forma
Object.entries(pessoa).forEach(([chave, valor]) =>{
  console.log(`${chave}: ${[valor]}`)
})

//Forma de definir propiedades de um atributo
Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '07/08/1998'
})

pessoa.dataNascimento = '01/01/1997'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // realiza concatenação dos objetos para o de destino

Object.freeze(obj)
obj.c = 1234
console.log(obj)