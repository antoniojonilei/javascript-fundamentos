const fabricantes = ["mercedes", "audi", "bmw"]

function imprimir(nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
}

fabricantes.forEach(imprimir)

//callback é passar uma função e a função ser chamada quando um evento acontecer


fabricantes.forEach(function(fabricantes) {
    console.log(fabricantes)
})

//o evento neste caso é o loop

fabricantes.forEach( fabricantes => console.log(fabricantes))