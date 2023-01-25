// Cadeia de protótipo (prototype chain)

const avo = {atrib1: 'A'} // avó tem como prototipo Object.prototype
const pai = {__proto__: avo, atrib2: 'B'}
const filho = {__proto__: pai, atrib3: 'C'}

// Não encontra atributo0 e retorna undefinid
console.log(filho.atrib0, filho.atrib1, filho.atrib2, filho.atrib3)

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta){
    if(this.velAtual + delta <= this.velMax){
      this.velAtual += delta
    }else{
      this.velAtual = this.velMax
    }
  },
  status(){
    return `${this.velAtual} Km/h de ${this.velMax} Km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324 // Shadowing - sombrear o atributo principal do objeto carro
}

const volvo = {
  modelo: 'V40',
  status(){
    return `${this.modelo}: ${super.status()}`
  }
}
// Função importante
// função que estabelece uma relacao de prototipo entre 2 objetos
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(200)
console.log(ferrari.status())


