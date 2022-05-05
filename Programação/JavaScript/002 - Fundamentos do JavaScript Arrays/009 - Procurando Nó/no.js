const alunos = ['João', 'Juliana', 'caio', 'Ana']
const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos.indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ',sua media é ' + listaDeNotasEAlunos[1][indice]
    }
    else {
        return "Esse aluno não esta cadastrado"
    }
}
console.log(exibeNomeNota("Ana"))