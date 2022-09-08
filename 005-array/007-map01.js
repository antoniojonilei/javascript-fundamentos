const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//retorna um array apenas com os preços

const jsonParse = json => JSON.parse(json)
const returnPreco = produto => produto.preco

const somentePreco = carrinho.map(jsonParse).map(returnPreco)

console.log(somentePreco)