const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // tira da ultima posição
console.log(pilotos)

pilotos.push('Verstappen') // adicina na ultima posição
console.log(pilotos)

pilotos.shift() // tira da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover

pilotos.splice(3, 1) // Massa removido
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2) // gera um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)