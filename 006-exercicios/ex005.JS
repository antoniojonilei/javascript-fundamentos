function maiorOuIgual(number1, number2) {
    if (number1 > number2 || number1 === number2) {
        return true
    }
    return false
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, '0'))
console.log(maiorOuIgual(5, 1))