const nomes = ['Diego', 'marjorie', 'ricardo', 'alexandre', 'juliana']

console.log(`O tamanho do alunado é ${nomes.length}`)
const salaAzul = nomes.slice(0, nomes.length / 2)// o slice pede dois parametros, o index ao qual sera a atividade e a ação.
const salaBlue = nomes.slice(nomes.length / 2) //o final do slice anterio é reservado

console.log(`Na sala Azul estão ${salaAzul}`)
console.log(`Na sala Azul estão ${salaBlue}`)