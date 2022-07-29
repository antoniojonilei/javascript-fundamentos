//armazenando uma função em uma variável
const imrpimirSoma = function (a, b) {
    console.log(a + b)
}

imrpimirSoma(2, 3)

//armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 5))

//retorno implicito função arrow
const subtracao = (a, b) => a - b 
console.log(subtracao(15, 5))

const imprimir2 = a => console.log(a)
imprimir2('Top!!!')