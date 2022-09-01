// cadeira de protótipos (Prototype Chain)
Object.prototype.atrr0 = '0'

const avo = { atrr1: 'A' }
const pai = { __proto__: avo, atrr2: 'B', atrr3: '3' }
const filho = { __proto__: pai, atrr3: 'C' }

console.log(filho.atrr0, filho.atrr1, filho.atrr2, filho.atrr3)

