//  Criar elemento
var ele = document.createElement("div")

ele.classList = "div-criada"
console.log(ele)

var container = document.querySelector("#container")

// Inserindo elemento filho

container.appendChild(ele)

// inserBefore - inseri antes

var el2 = document.createElement("div")
el2.classList = "div-before"

// referencia

var el3 = document.querySelector("#container .div-criada")
console.log(el3)

container.insertBefore(el2, el3) // el3 é referencia