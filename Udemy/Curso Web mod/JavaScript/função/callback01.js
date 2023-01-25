const fabricantes = ["Mercedes", "Audi", "Bmw"]

function imprimir(nome, indice){
  console.log(`${indice}, ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))