// console.log(typeof console)

console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'

console.log(obj1.nome)

function Objeto(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Objeto('cadeira')
const obj3 = new Objeto('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()