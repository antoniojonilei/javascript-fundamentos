function inverso(valor) {
    if (typeof valor == "boolean") {
        console.log(!valor)
    } else if (typeof valor == "number"){
        console.log(-valor)
    } else {
        console.log(`booleano ou nmérico esperados, mas o parâmetro é do tipo ${typeof valor}`)
    } 
   
}

inverso(-2000)
inverso(true)
inverso('jonilei')