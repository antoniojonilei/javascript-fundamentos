// o fato de colocar um underline no começo do nome da variável nõa quer dizer que é uma variável privada, mas isso é uma convenção de mostrar que essa variável é pretendida acessar apenas internamente do objeto

const sequencia = {
    _valor: 1, 
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor) {
            this._valor = valor
        }
     }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)