// CLosure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto Léxico em ação

const contexto = 'global'

function fora() {
    const contexto = 'local'
    function dentro() {
        return contexto
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())