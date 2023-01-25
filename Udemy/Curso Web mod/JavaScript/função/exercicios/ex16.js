function Calc (numb1, numb2, op){
  switch(op){
    case '+':
      console.log(`Soma: ${numb1 + numb2}`)
      break
    case '-':
      console.log(`Subtração: ${numb1 - numb2}`)
      break
    case '*':
      console.log(`Multiplicação: ${numb1 * numb2}`)
      break
    case '/':
      console.log(`Divisão: ${numb1 / numb2}`)
      break
    default:
      console.log('Operação não definida')
      break
    }
}

Calc(5, 5, "+")
Calc(5, 5, "-")
Calc(5, 5, "*")
Calc(5, 5, "/")