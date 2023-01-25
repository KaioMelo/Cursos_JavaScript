Array.prototype.forEach2 = function(callback){
  for(let i = 0; i < this.length; i++){
    callback(this[i], i, this)
  }
}

const aprovado = ['Joana', 'Kaio', 'Victor', 'Julia']

aprovado.forEach2(function(nome, indice){ 
  console.log(`${indice + 1}) ${nome}`)
})