let dobro = function(a) {
    return 2 * a
}

console.log(dobro(4))

dobro = (a) => {
    return 2 * a
}

console.log(dobro(3))

dobro = a => 2 * a //return implicito

console.log(dobro(10))

let ola = function() {
    return "Ola!!"
}   

ola = () => "Olá!!" //forma padrão
ola = _ => "Ola!!" //possui um parametro

console.log(ola())