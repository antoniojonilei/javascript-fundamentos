// classe é uma forma diferente de intanciar uma função

function Carro(velocidadeMaxima = 200, delta = 5) {
    // attributo privado
    let velocidadeAtual = 0
    
    // medodo publico
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getValocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getValocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getValocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)