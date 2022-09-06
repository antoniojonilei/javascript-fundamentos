// Object.preventExtensions
// previnir que seu objeto seja extendido - adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


//Object.seal
// Não consegue adicionar e excluir atributos, mas consegue modificar os atributos que ja existem
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)


//Object.freeze = selado + valores constantes
// não exclui, não adiciona e não modifica atributos