//  Eventos Assincronos

// setTimeout

console.log("Antes do setTimeout")

setTimeout(function(){
  console.log("Testando setTimeOut!")
}, 3000) // formato em milisegundos (3 segundos)

console.log("Depois do setTimeout")

// setInterval

setInterval(function(){
  console.log("Testando setInterval")
}, 1000)