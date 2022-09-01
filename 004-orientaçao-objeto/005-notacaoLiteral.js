const a = 1
const b = 2 
const c = 3

// antigamente era necessário criar objeto da seguinte forma 
const obj1 = { 
    a: a, 
    b: b, 
    c: c
}

// esse tipo de duplicidade não é mais necessária
const obj2 = { a, b, c }

console.log(obj1)
console.log(obj2)


// mudaças em relação a criação de atributos de objetos
const nomeAttr = 'nota'
const valorAttr = 7.89

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)


// forma simplificada de definir funções entro de um objeto literal
const obj5 = {
    funcao1: function() {
        //... forma antiga de escrever uma função
    },
    funcao2(){
        // ... forma mais reduzida de escrever uma função
    }
}

console.log(obj5)