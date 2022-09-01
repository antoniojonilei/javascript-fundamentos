// pessoa -> (endereço de memória) -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana'} //erro

Object.freeze(pessoa) 
//congela o objeto torna o objeto em si constante

pessoa.nome = 'Maria'
pessoa.end = "Rua abc"
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)


const pessoaConstante = Object.freeze({ nome: 'Jonilei' })
console.log(pessoaConstante)