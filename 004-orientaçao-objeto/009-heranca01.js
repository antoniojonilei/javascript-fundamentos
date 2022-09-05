// cadeira de protótipos (Prototype Chain)
Object.prototype.atrr0 = '0' //evitar esse tipo de manipulação

const avo = { atrr1: 'A' }
const pai = { __proto__: avo, atrr2: 'B', atrr3: '3' }
const filho = { __proto__: pai, atrr3: 'C' }

console.log(filho.atrr0, filho.atrr1, filho.atrr2, filho.atrr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelaraMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h` 
    }
}

const ferrari = {
    modelo: 'f4a',
    velMax: 324
}

const volvo = {
    modelo: 'v4a',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

// do mesmo jeito que se usa this para referenciar o objeto o atual, se usa super para referenciar o objeto prototipo

Object.setPrototypeOf(ferrari, carro)
//ferrari tem como protótipo o objeto carro
// primriro o objeto, depoiso prototipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelaraMais(100)
console.log(volvo.status())

ferrari.acelaraMais(300)
console.log(ferrari.status())