var readline = require ('readline-sync')
var lista = ['café','leite']
var numero =  readline.question('Escolha a função a ser executada:\n [1]Adicionar [2]Apagar [3]Vizualizar [4]Sair\n\n ')


do{

    switch(numero){
    case 1:
        console. clear()
        var add = readline.question('\nO que deseja adiconar na lista ?\n ')

        var possicao = readline.question('Gostaria de salvar no inicio ou no final da lista ?\nEscreva da seguinte forma: Final ou Inicio\n\n')
        if(possicao == 'Final'){
            lista.push(add)
        }
        else{
            lista.unshift(add)
        }
        console. clear()
        var numero =  readline.question('Qual função deve ser executada agora?:\n [1]Adicionar [2]Apagar [3]Vizualizar [4]Sair\n\n')
        while(numero <1 || numero >4){
            var numero =  readline.question('Opção invalida. Escolha uma das funções a baixo:\n [1]Adicionar [2]Apagar [3]Vizualizar [4]Sair\n\n')
        }
    break

    case 2:
        console. clear()
        var apagar = readline.question('Gostaria de apagar no inicio ou no final ? ?\nEscreva da seguinte forma: Final ou Inicio\n\n')
        if(apagar == 'Final'){
         lista.pop()
         console.log(lista)
        } 
        else{
         lista.shift()
         console.log(lista)
        }

        console. clear()
        var numero =  readline.question('Qual função deve ser executada agora?:\n [1]Adicionar [2]Apagar [3]Vizualizar [4]Sair\n\n')
        while(numero <1 || numero >4){
            var numero =  readline.question('Opção invalida. Escolha uma das funções a baixo:\n [1]Adicionar [2]Apagar [3]Vizualizar [4]Sair\n\n')
        }
    break

    
    case 3:
        console. clear()
        i = 1
        for(i; i <= lista.length; i++){ 
            console.log(`${i}° - ${lista[i-1]}`)
        }
        var numero =  readline.question('Qual função deve ser executada agora?:\n [1]Adicionar [2]Apagar [3]Vizualizar [4]sair\n\n')
        while(numero <1 || numero >4){
            var numero =  readline.question('Opção invalida. Escolha uma das funções a baixo:\n [1]Adicionar [2]Apagar [3]Vizualizar [4]Sair\n\n')
        }
    break
}
}while(numero != 4 )

console.log('Programa finalizado')
