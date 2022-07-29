//object não é JSON (javascript object notation)
//object é uma coleção de chaves e valores

const prod1 = {}

//atribuição de forma dinâmica
prod1.nome = 'celular Ultra Mega' 
prod1.preco = 2500.90
prod1['desconto-legal'] = 0.40
console.log(prod1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90
}

console.log(prod2)