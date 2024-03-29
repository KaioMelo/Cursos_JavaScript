// usando a notação literal

const obj1 = {}
console.log(obj1)

// Objeto em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construtora 

function Produto(nome, preco, desc){
  this.nome = nome
  this.getPrecoComDesconto = () =>{
    return preco * (1 - desc)
  }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2586.99, 0.25)

console.log(p1.getPrecoComDesconto().toFixed(2), p2.getPrecoComDesconto().toFixed(2))

// Função Factory

function criarFuncionario (nome, salario, faltas){
  return{
    nome,
    salario,
    faltas,
    getSalario(){
      return (salario / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11980, 1)

console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2))

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Um função famosa que retorna Objeto...

const fromJS = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJS.info)