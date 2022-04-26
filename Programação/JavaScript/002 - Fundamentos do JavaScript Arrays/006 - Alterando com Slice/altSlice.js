const listaDeChamada = ['Diego', 'marjorie', 'ricardo', 'alexandre', 'juliana']
//index, quanto elementos vão ser modificados e pelo que... caso remover o terceiro parametro fica vazio 
listaDeChamada.splice(4, 2, 'Rodrigo')
console.log(`Lista de Chamada ${listaDeChamada}`)