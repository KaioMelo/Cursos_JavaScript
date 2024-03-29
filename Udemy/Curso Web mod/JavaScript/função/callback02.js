const notas = [7.7, 6.5, 5.2, 8.5, 3.6, 7.1, 8.9]

// Sem callback
const notasBaixa1 = []
for (let i in notas){
  if(notas[i] < 7){
    notasBaixa1.push(notas[i])
  }
}
console.log(notasBaixa1)

// Com callback

const notasBaixa2 = notas.filter(function (nota){
  return nota < 7
})

console.log(notasBaixa2)

// Com calback + Arrow

const notasMenorQue7 = nota =>  nota < 7
const notasBaixa3 = notas.filter(notasMenorQue7)
console.log(notasBaixa3)
