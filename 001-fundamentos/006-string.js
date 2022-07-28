const escola = "cod3r"

console.log(escola.charAt(4)) //.charAt(value) seleciona o caractere indicado com o valor indicado

console.log(escola.charAt(5)) //retorna o vazio, passou da quantidade de caracteres

console.log(escola.charCodeAt(3)) //retorna o valor da tabela ASC - UNICODE

console.log(escola.indexOf('o')) //retorna o index do caractere passado no valor

console.log(escola.substring(1))//exclui um caractere
console.log(escola.substring(0, 3)) //primeiro valor é o inicio e o segundo valor é onde para

console.log('Escola '.concat(escola).concat("!"))

console.log(escola.replace(3, "e")) //substitui o valor do index pelo caracter do segundo valor

console.log('Ana, Maria, Pedro'.split(','))//separa egerao um array