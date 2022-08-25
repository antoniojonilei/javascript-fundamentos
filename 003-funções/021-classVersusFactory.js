class Pessoa {
    constructor(nome){
        this.nome = nome 
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('Jonilei')
pessoa1.falar()
// No caso da classe, quando usado no browser o this vai apontar para undefined


const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const pessoa2 = criarPessoa('José')
pessoa2.falar()