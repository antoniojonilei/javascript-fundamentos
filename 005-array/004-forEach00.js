const aprovados = ['Aghata', 'Joao', 'Maria', 'Chiquinho']

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    // o terceiro parametro é o array
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)