const mesDoAno = (ano) => {
  switch(ano){
    case 1: 
      return `Janeiro`
      break
    case 2: 
      return `Fevereiro`
      break
    case 3: 
      return `Março`
      break
    case 4: 
      return `Abril`
      break
    case 5: 
      return `Maio`
      break
    case 6:
      return `Junho`
      break
    case 7: 
      return `Julho`
      break
    case 8:
      return `Agosto`
      break
    case 9:
      return `Outubro`
      break
    case 10: 
      return `Setembro`
      break
    case 11:
      return `Novembro`
      break
    case 12:
      return `Dezembro`
      break
    default:
      return `valor não corresponde a nenhum mês do ano`
      break
  }
}

console.log(mesDoAno(12))
console.log(mesDoAno(13))