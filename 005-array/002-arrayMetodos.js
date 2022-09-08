const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

//exclui o ultimo elemento do array
pilotos.pop()
console.log(pilotos)

// adiciona um novo elemento na ultima posição
pilotos.push('Verstappen')
console.log(pilotos)

// remove o primeiro elemento
pilotos.shift()
console.log(pilotos)

// adiciona no primeiro
pilotos.unshift('Hamilton')
console.log(pilotos)


// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) 
console.log(pilotos)


// slice retorna um novo array a partir do indice indicado
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)