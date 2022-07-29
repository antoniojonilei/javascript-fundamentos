//funcção é um bloco de código, agrupa sentenças de código. Função tem nome para ser chamado. Recebe parametros de entrada e no final retorna um valor

//function que recebe dados e retorna alguma coisa
function somar(a, b = 1) {
    return a + b
}

console.log(somar(5, 8))
console.log(somar(3))

//function que recebe dados e nao retorna nada
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 3, 4, 5, 6, 7)
imprimirSoma()