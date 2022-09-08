// filter é uma função que recebe o indice atual, o item atual, e o array que está percorrendo

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false },
]

console.log(produtos.filter(function(p) {
    return false
}))

const produtoFragil = function(p) { 
    if (p.fragil) { 
        return p
    } 
}

const produtoCaro = function(p) {
    if (p.preco > 500) {
        return p
    }
}

const resultado = produtos.filter(produtoFragil).filter(produtoCaro)
console.log(resultado)