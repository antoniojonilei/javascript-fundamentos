// class Pessoa {
//     constructor(nome){
//         this.nome = nome 
//     }

//     falar() {
//         console.log(`Meu nome é ${this.nome}`)
//     }
// }

// const pessoa1 = new Pessoa('Jonilei')
// pessoa1.falar()


function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`menu nomé é ${this.nome}`)
    }
}

const p1 = new Pessoa('José')
p1.falar()