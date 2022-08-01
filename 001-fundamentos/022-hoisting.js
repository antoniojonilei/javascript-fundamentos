//quando se declara uma variavel utilizando VAR, ela sofr o içamento (hoisting), o próprio interpretador da linguagem pega a variavel e joga pra cima
console.log('a = ', a)
var a = 2
console.log('a = ', a)

// var a
// console.log('a = ', a)
// a = 2
// console.log('a = ', a)

//quando se declara com LET o efeito de içamento não ocorre
console.log('b = ', b) //erro!!
let b = 2
console.log('a = ', b)