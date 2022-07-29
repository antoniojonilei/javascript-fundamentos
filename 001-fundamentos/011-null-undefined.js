const a = {name: 'teste'}

const b = a

b.name = 'opa'

console.log(a)

//se eu mudar a partir de A o B vai perceber
//uma atribuição por referencia

//quando trabalhamos com tipos primitivos, a cópia é feita por valor

let c = 3 //tipo number (primitivo)
let d = c
d++
console.log(d)
console.log(c)

//undefined
let valor //nao inicializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
// console.log(valor.toString()) //erro!
//null para zerar o valor de uma varável

const produto = {}
 console.log(produto.preco)
 console.log(produto)

 produto.preco = undefined //evitar atribuir undefined
 console.log(!!produto.preco)
 console.log(produto)

 produto.preco = null //sem preco
 console.log(!!produto.preco)
 console.log(produto)