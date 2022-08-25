// Call e Apply são duas formas diferentes de se chamar uma função

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` 
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// os parametros em Call 
// o primeiro é o contexto, e depois os parametros da função
console.log(getPreco.call(carro, 0.17, '$'))

// com Apply, os parametros são passados dentro de um array
// o primeiro parametro é o objeto que será usado como contexto de execução
// depois, um array com todos os parametros dentro 
console.log(getPreco.apply(global, [0.17, 'U$']))