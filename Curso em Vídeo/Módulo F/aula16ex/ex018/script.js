let num = document.getElementById('txtn')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let vet = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function Adicionar(){
    if(isNumero(num.value) && !inLista(num.value, vet)){
       vet.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = ''
    }else{
        window.alert('Valor Invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function Finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = vet.length
        let maior = vet[0]
        let menor = vet[0]
        let soma = 0
        let media = 0
        //VETOR PARA VARRER VETORES INTEIROS
        for(let pos in vet){
            soma += vet[pos]
            if(vet[pos] > maior)
            maior = vet[pos]
            if(vet[pos] < menor)
            menor = vet[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML = `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML = `<p>A média dos valores digitados é ${media}.</p>`


    }
}