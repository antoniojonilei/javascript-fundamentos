const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

//pega todas as chaves do objeto
console.log(Object.keys(pessoa))

//pega os valores do objeto
console.log(Object.values(pessoa))

// pega tanto chaves quanto valores
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
    //de forma mais descritiva - usando destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})


// definir propriedade de um objeto
// primeiro o target que quer definir como propriedade
// definir o nome da propriedade
// passar um objeto que vai ter todas as características dessa propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/02/1991'
})

pessoa.dataNascimento = '01/03/2015'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


// Object.assgn (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)