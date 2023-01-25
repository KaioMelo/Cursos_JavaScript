const novoSalario = (plano, salario) =>{
  let aumento = 0
  switch(plano){
    case 'A':
      aumento = salario * 0.10
      console.log(`Plano A: ${salario + aumento}`)
      break
    case 'B':
      aumento = salario * 0.15
      console.log(`Plano B: ${salario + aumento}`)
      break
    case 'C':
      aumento = salario * 0.20
      console.log(`Plano C: ${salario + aumento}`)
      break
    default:
      console.log(`Plano inválido`)
      break
  }
}

novoSalario("A", 1000)
novoSalario("B", 1000)
novoSalario("C", 1000)