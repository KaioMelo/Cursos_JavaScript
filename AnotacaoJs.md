# Java Script

## Identificadores 



<ul><li>Podem começãr com <strong>letra</strong>,<strong>$</strong> ou <strong>_</strong></li>
<li>Não podem começar com <strong>números</strong></li><li>É possivel usar <strong>acentos</strong> e <strong>símbolos</strong></li><li>Não podem conter <strong>espaços</strong><li>Não podem ser <strong>palavras reservadas</strong></li></li></ul>



### Dicas



<ul><li><strong>Maiúsculas</strong> e <strong>minúsculas</strong> fazem diferença</li><li>Tente escolher <strong>nomes coerentes</strong> para as variáveis</li></ul>



## Tipos de dados



<ul><li>Number</li>
    <ul>
    <li>Infinity</li>
    <li>NaN</li>
    </ul>
    <li>String</li>
    <li>Boolean</li>
    <li>Null</li>
    <li>Undefined</li>
    <li>Object</li>
    <ul>
        <li>Array</li>
    </ul>
    <li>Function</li>
</ul>


<!-- Exibe qual tipo de dados -->

<p>Typeof </p> 






## Apresentação na tela

<!-- alerta na tela -->

```
window.alert('...') 
```
<!-- tela de confirmação -->

```
window.confirme('...')
```
<!-- tela interativa -->

```
window.prompt('...') 
```



## Conteúdo



### String para Number

<!-- Sem Interpolação -->

<!-- '+' tem função de concatenação -->

```
window.alert('...' + nome) 
```

<!-- Number + Number s -->

<!-- String + String s -->

```
Number,parseInt(window.alert('...' string + string nome) )
```

<!--  Number(window.alert('...' + nome) )-->



### Number para String

<!-- Sem Interpolação -->

window.alert('...' + nome) 

<!-- window.alert('...' + nome.string)  -->

<!-- window.alert('...' + string(nome)  -->



#### Template String 

<!-- Com Interpolação -->

<!-- Utiliza crases ao invés de aspas -->

```
window.alert(`A soma entre ${n1} e ${n2} dos valores é igual a: ${s}`)
```



### Formatando String

```
var s = 'JavaScript'
```

<!-- Quantos caracteres uma string tem-->

```
s.length()
```

 <!-- Tudo para MAIÚSCULOS-->

```
s.toUpperCase()
```

 <!-- Tudo para minúsculos-->

```
s.toLowerCase()

```

### Formatando com Números

```
var n = 1,500.5 
```

<!-- adicionar casas decimais -->

```
n.tofixed()
```

<!-- valor monetário -->

```
n.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
```



## Operadores



### Aritméticos 

<ul>
    <li><strong>+</strong>  soma</li>
    <li><strong>-</strong>  subtração</li>
    <li><strong>*</strong>  multiplicação</li>
    <li><strong>/</strong>  divisão</li>
    <li><strong>%</strong>  resto da divisão</li>
    <li><strong>**</strong> potência</li>
</ul>



#### Ordem de precedência

 

<ul>
    <li><strong>()</strong></li>
    <li><strong>**</strong></li>
    <li><strong>*</strong></li>
    <li><strong>/</strong></li>
    <li><strong>%</strong></li>
    <li><strong>+</strong></li>
    <li><strong>-</strong></li>
</ul>


#### Incremento

 

num = num + 1

num += 1



++n <!-- pré-incremento -->

n++ <!-- pós-incremento -->




### Atribuição



<ul>
    <li><strong>=</strong> Atribuição</li>
    <li><strong>+=</strong> Atribuição de soma</li>
    <li><strong>-=</strong> Atribuição de subtração</li>
    <li><strong>*=</strong>	Atribuição de multiplicação</li>
    <li><strong>/=</strong> Atribuição de divisão</li>
    <li><strong>%=</strong> Atribuição de resto</li>
    <li><strong>**=</strong> Atribuição de potência</li>
</ul>


### Relacionais



<ul>
    <li><strong>></strong> maior</li>
    <li><strong><</strong> menor</li>
    <li><strong>>=</strong> maior ou igual</li>
    <li><strong><=</strong>	menor ou igual</li>
    <li><strong>==</strong> igual</li>
    <li><strong>!=</strong> diferente</li>
</ul>


### Identidade

<!--Mesmo valor e tipo-->

```
5 === '5' falso
```



### Lógicos



<ul>
    <li><strong>!</strong> negação</li>
    <li><strong>&&</strong> conjunção</li>
    <li><strong>||</strong> disjunção</li>
</ul>


## DOM - Document Object Manipulation



### Seleção



<ul>
    <li>por<strong> Marca</strong></li>
    <li>por <strong> ID</strong></li>
    <li>por<strong> Nome</strong></li>
    <li>por<strong> Classe</strong></li>
    <li>por<strong> Seletor</strong></li>
</ul>



#### Marca



```
getElementsByTagName()
```


<!--p1 igual a paragrafo-->

```
var p1 = window.document.getElementsByName('p')[1]
```



#### ID



```
getElementById()
```



#### Nome



```
getElementsByName()
```



#### Classe



```
getElementsByClassName()
```



#### Seletor



```
querySelector()
querySelectorAll()
```



<!--Todo 'ID' é representado por '#' -->

```
<div id="msg"></div>

var d = window.document.querySelector('div#msg')
```
<!--Todo 'Classe' é representado por 'ponto' -->

```
<div class="msg"></div>

var d = window.document.querySelector('div.msg')
```



### Eventos DOM



<p>JavaScript Dom event list</p>



#### Função



<p>Conjunto de códigos, que vão ser executadas somente com a execução do evento</p>



```
function ação(){

bloco

}
```



## Condição



### Tipos de Condição



#### Condição simples 



```
if (condição){
	true
}
```

#### Condição Composta



```
if (condição){
	true
}else{
	false
}
```



#### Condição Encadeada



```
if (condição 1){
	bloco1
}else{
	if(condição 2){
		bloco2
	}else{
		bloco3
	}
}
```



#### Condição Múltiplas



```
switch(expressão){

case valor 1:

	break
case valor 2:

	break
case valor 3:

	break

default:
}

```

## Repetição



### While

```
while(c <= 10){

}
```



### Do...While

```
Do{

}While(c <= 10)
```



### For

```
For(var c = 1; c <= 10; c++){

}
```

### For/in
<!--Funciona como uma repetição a partir de uma propriedade-->
```
For([indice] in [objeto ou array]){
	declaracao	
}
```

### For/of
<!--Funciona como uma repetição a partir de uma valor-->
```
For([indice] of [objeto ou array]){
	declaracao	
}
```

## Variáveis



### Variáveis Simples

```
Var c = 1 <!--Define uma variável global-->

Let c = 1 <!--Define variaveis limitadas de seu escopo no blobo-->
```



### Variáveis Compostas



```
let num = [8,8,4] 

num[3] = 6 <!--Adicionanco valor na posição 3-->

num.push(7) <!--Adicionado valor na ultima casa-->

num.length <!--exibir quant. de elementos do vetor-->

num.sort() <!--Ordenar vetor-->

num.indexOf(n) <!--Localizar elemento no vetor-->
```



## Funções

```
function nomeDaFuncao(){

}
nomeDaFuncao();
```

### Funções com parâmetros

```
function nomeDaFuncao(parametro){
	${intrucao};
}
nomeDaFuncao(valorDoParametro);
```

### Função declarativa
<!--O nome da função é obrigatória-->
```
function nomeDaFuncao(){
	${intrucao};
}
nomeDaFuncao();
```
### Arrow function
<!--São funções de expressão de sintaxe curta-->
```
var fincao = () => {
	${intrucao};
}

```

## Map vs Objeto
<!--Uma coleção de arrays no formato [chave, valor];-->
<!--Pode ser iterado por um loop for...of-->

```
const myMap = new Map();

myMap.set('apple','fruit'); /*Adicionar: chave -> valor*/

myMap.get("apple"); /*verificar*/

myMap.delete("apple"); /*remover*/

```

<ul>
	<li>Maps podem ter chaves de qualquer tipo;</li>
	<li>Maps possuem a propriedade lenght;</li>
	<li>Maps são mais fáceis de iterar;</li>
	<li>Utilizando quando o valor das chaves é desconhecidos;</li>
	<li>Os valores tem mesmo tipo;</li>
</ul>

## Set vs Array
<!--Sets são estruturas que armazenam apenas valores únicos-->

```
const mySet = new Set();

mySet.add(1); /*Adiconar*/

mySet.has(1); /*Verificar*/

mySet.delete(1); /*Deletar*/


```

<ul>
	<li>Possui valores únicos;</li>
	<li>Em vez da propriedade lenght, consulta-se o número de registros pela propriedade size;</li>
	<li>Não possui os métodos map, filter, reduce etc;</li>
</ul>

## Tratamentos de Erros
### Tipos de Erros
#### ECMAScript Error
<!--Erros que ocorrem em tempo de execução-->
<ul>
	<p>Composto por:</p>
	<li>Mensagem</li>
	<li>Nome</li>
	<li>Linha</li>
	<li>Call Stack</li>
</ul>

#### DOMException
<!--Erros relacionados ao Document Object Model (DOM)-->

<p>Erros referentes a estrutura da sua arvore e elementos da página da web</p>

### Tratando Erros
#### Throw vs Return
<!--Se tiver um ERRO ele retorna uma string-->
```
function verificaPalindromo(string){
	if (!string) return "string inválida";
	
	return string === string.split('').reverse().join('');
}
verificaPalindromo('cat');

```
<!--Se tiver uma string inválida ele retorna um Erro-->
```
function verificaPalindromo(string){
	if (!string) return "string inválida";
	
	return string === string.split('').reverse().join('');
}
verificaPalindromo('cat');

```

#### Try...catch
<!--Permite a manipulação de erros e propriedades do erro mais personalizada-->


#### Finally

### Criando Erros

#### Objeto Error


## Assíncrono
### Promises
<!--Objeto de processamento assíncrono-->
<ul>
	<p>Uma promise pode ter 3 estados</p>
	<li>Pending</li>
	<li>Fulfilled</li>
	<li>Rejected</li>
</ul>

```
const myPromise = new Promise((resolve, reject) => {
	window.setTimeout(() => {
		resolve(console.log('resolvida'));
	}, 2000);
});

await myPromise
	.then((resuly) => result + 'passando pelo then')
	.then((result) => result + 'e agora acabou!)
	.catch((err) => console.log(err.message));
```

### Async / await

```
async function resolverPromise(){
	const myPromise = new Promise((resolve, reject) => {
		window.setTimeout() => {
			resolve('Resolvida');
	}, 3000);
});

const resolved = await myPromise
	.then((result) => result + 'passando pelo then')
	.then((result) => result + 'e agora acabpu!')
	.catch((err) => console,log(err.message));
	
return resolved;
}
	

```

## APIs
### Fetch

```
fetch(url, options)
	.then(response => response.json())
	.then(json => console.log(json))


```
<!--retorna uma Promise-->

<p>Operações no banco (<strong>POST</strong>, <strong>GET</strong>, <strong>PUT</strong>, <strong>DELETE</strong>, etc</p>

#### GET

```
fetch('https://endereco-api.com/', {
	method: 'GET',
	cache:'no-cache',
})
	.then(response => response.json())
	.then(json => console.log(json))

```
#### POST

```
fetch('https://endereco-api.com/', {
	method: 'POST',
	cache:'no-cache',
	body: JSON.stringify(data)
})
	.then(response => response.json())
	.then(json => console.log(json))

```
