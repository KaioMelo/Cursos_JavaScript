// inserindo elemento no body

var body = document.querySelector('body')
console.log(body)

var novoParagrafo = document.createElement("p");
console.log(novoParagrafo);

var texto = document.createTextNode("Este é o conteudo do paragrafo");
novoParagrafo.appendChild(texto);
console.log(novoParagrafo);

body.appendChild(novoParagrafo)

// inserindo elemento no container

var container = document.getElementById("container")
console.log(container)

var el = document.createElement("span")
el.appendChild(document.createTextNode("Texto do span"))
console.log(el)

container.appendChild(el)