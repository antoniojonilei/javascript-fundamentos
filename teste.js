var a = 2
console.log(a)

function qualquer() {
    console.log(a)
    var a = 3
    console.log(a)
}

qualquer()

function zeldeiro(zelda1, zelda2, aLinkToThePast) {
    const nes = zelda1 || zelda2
    const snes = aLinkToThePast
    const todos = zelda1 && zelda2 && aLinkToThePast
    const jogueiAlgum = zelda1 || zelda2 || aLinkToThePast

    return { nes, snes, todos, jogueiAlgum }
}

console.log(zeldeiro(true, false, false))
console.log(zeldeiro(true, true, true))
console.log(zeldeiro(false, false, true))