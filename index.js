const readline = require('readline-sync')

function start(){
 const content = {}

 content.searchTerm = askAndReturnSearchTerm()
 content.prefix = askAndReturnPrefix()

 function askAndReturnSearchTerm(){
     return readline.question('Informe o termo de Busca para gerar videos:')

 }

 function askAndReturnPrefix(){
     const opcoes = ['O que e?','De onde surgiu?','A historia do(a):', 'Quem eh']
     itemSelecionado = readline.keyInSelect(opcoes,'Escolha uma opcao:')
     return opcoes[itemSelecionado]
     
 }

 console.log(content)
}

start()
