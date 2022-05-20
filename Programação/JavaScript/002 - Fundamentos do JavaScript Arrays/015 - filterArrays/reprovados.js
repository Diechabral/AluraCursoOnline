const nomes = ["ana Julia", "Caio", "Vinicius", "Bia Silva"]
const notas = [7, 4.5, 8, 7.5]

const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5)

console.log(`reprovados: ${reprovados}`)