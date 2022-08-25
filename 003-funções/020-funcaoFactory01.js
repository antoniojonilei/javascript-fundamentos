function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Computador", 2500))
console.log(criarProduto("Casa", 250000))