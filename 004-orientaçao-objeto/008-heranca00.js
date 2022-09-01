// Herança é um princípio da Orientação a Objeto que faz com que o elemento receba de seu "pai" atributos e comportamentos e que reuse código

// herança baseada em protótipos

// .__proto__  = atributo que acessa quem é o protótipo do objeto. Quem seria o objeto "pai"

const ferrari = {
    modelo: "f40",
    velMax: 324
}

const volvo = {
    modelo: "v40",
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)