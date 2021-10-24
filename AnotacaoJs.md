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

<!-- var s = 'JavaScript' -->



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

<!-- var n = 1,500.5 -->



<!-- adicionar casas decimais -->

```
n.tofixed()
```

<!-- Real Brasileiro -->

```
n.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
```

