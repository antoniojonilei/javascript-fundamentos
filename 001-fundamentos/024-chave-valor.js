//par nome/valor
const saudacao = 'Opa' //contexto lexico 1

function exec() {
    const saudacao = 'Falaaai' //contexto lexico 2
    return saudacao
}

//Objetos são grupos aninhados de nome/valor
const cliente = {
    nome: 'Jonilei',
    idade: 31,
    peso: 85,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)