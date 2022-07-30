{
    {
        {
            {
                var sera = "sera???" 
                console.log(sera)
            }
        }
    }
}

console.log(sera)

//quando se define uma variável dentro de uma função, o escopo dessa variável será apenas dentro da função

function local() {
    var opa = 'opa!'
    console.log(opa)
}

local()
console.log(opa)

//quando se cria uma variável fora de uma função, essa variavel tem escopo global (no browser é window)

//var só pode ter dois escopos possiveis: escopo global, escopo de função