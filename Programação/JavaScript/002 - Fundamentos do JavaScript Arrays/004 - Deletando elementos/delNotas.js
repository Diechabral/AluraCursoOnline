const notas = [10, 7, 8, 5, 10]
notas.pop()
console.log(notas)
//quando nehum tipo de função é declarado é considerado como uma "var"
let media = ((notas[0] + notas[1] + notas[2] + notas[3]) / notas.length)

console.log(`A media é ${media}`)
