/*
- Fora de escopos locais o this sempre se refere ao objeto global window

- Em objetos o this vai se referir a instência e pode acessar suas propriedades
*/

let pessoa = {
    nome: 'Jonilei',
    idade: 31,
    falar: function() {
        console.log('E ai, meu chapa!')
    },
    dizerNome: function() {
        console.log(`Meu nome é ${this.nome}`)
    },
    aniversario: function() {
        this.idade += 1
    }
}    

pessoa.falar()
pessoa.dizerNome()

console.log(`idade: ${pessoa.idade}`)
pessoa.aniversario()
console.log(`Depois do aniversario: ${pessoa.idade}`)