// alterando atributo - adicionando

var title = document.querySelector("#title")

title.setAttribute("class", "testando-atributo")
console.log(title)


var btn = document.querySelector("#btn")
btn.setAttribute("disabled", "disabled")

var subtitle = document.querySelector(".subtitle")
subtitle.setAttribute("id", "titulo-2")

// removendo atributo

var lista = document.querySelector("#lista_1")

lista.removeAttribute("id")
