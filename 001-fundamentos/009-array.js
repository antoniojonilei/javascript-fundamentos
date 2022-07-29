const arrayValores = [7.7, 8.9, 6.3, 9.2]
console.log(arrayValores[0], arrayValores[3])
console.log(arrayValores[4])//como o elelemto não existe, vai retornar undefined

arrayValores[4] = 10
console.log(arrayValores)

arrayValores[10] = 20
console.log(arrayValores)

console.log(arrayValores.length)

arrayValores.push({id: 3}, false, null, 'teste')
console.log(arrayValores)

console.log(arrayValores.pop())
delete arrayValores[0]
console.log(arrayValores)

console.log(typeof arrayValores)


// o ideal é ter um array com cada tipo