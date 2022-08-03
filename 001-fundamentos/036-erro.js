function tratarErroELancar(erro) {
    // throw new Error('Deu bug')
    // throw 10
    // throw true
    // throw 'mensagem de texto'
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.n0me.toUpperCase() + '!!!') // linha de erro
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { name: 'Roberto' }

imprimirNomeGritado(obj)