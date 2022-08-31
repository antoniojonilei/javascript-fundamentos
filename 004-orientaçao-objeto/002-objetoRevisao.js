// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = "cadeira"
produto['Marca do produto'] = 'Genérico'
produto.preco = 230

console.log(produto)

delete produto.preco
delete produto['Marca do produto']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 57,
        endereco: {
            logradouro: 'Rua abc',
            numero: 235
        }
    },
    condutores: [{
        nome: "Junior",
        idade: 19
    }, {
        nome: 'Ana',
        idade: 37
    }],
    calcularValorSeguro: function() {
        //....
    }
}

carro.proprietario.endereco.numero = 1999
carro['proprietario']['endereco']['logradouro'] = 'Av Pequena'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) //undefined

// console.log(carro.condutores.length) //erro 