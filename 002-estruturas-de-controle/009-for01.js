const notas = [6.7, 9.4, 7.4, 8.9, 9.8, 8.1, 7.7]

for(let i in notas) {
    console.log(`indice = ${i}, nota = ${notas[i]}`)
}

const pessoa = {
    nome: 'Jonilei',
    sobrenome: "Silva",
    idade: 31,
    peso: 86
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}