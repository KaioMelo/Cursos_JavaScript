// criando elemento

var el = document.createElement("h3");

el.classList = "testando-classe";

var texto = document.createTextNode("Este é o texto h3");

el.appendChild(texto);
console.log(el);

//  selecionar o elemento que quero trocar

var title = document.querySelector("#title");
console.log(title);

//  selecionar o pai do el

var body = document.querySelector("body");
var pai = title.parentNode; // forma para nçao precisar declarar o elemento pai

//  trocar os elementos 

pai.replaceChild(el, title)
