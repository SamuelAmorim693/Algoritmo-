var result = 0 

do{
    var n1 = Number (prompt("Informe o primeiro número: "))
    var n2 = Number (prompt("Informe o segundo número: "))
    var funcao = (prompt("Qual opereção gostaria de executar com os números informados?\n(Informe com o simbolo correspondente)\n\n[+]Soma [-]Subtrair [*]Multilpicar [/]Dividir"))


    while(funcao != '+' || funcao != '-' || funcao != '*' || funcao != '/'){
    var funcao = (prompt("Operação invalida. Escolha uma opreção valida\n(Informe com o simbolo correspondente)\n\n[+]Soma [-]Subtrair [*]Multilpicar [/]Dividir")) 

    }
 
switch(funcao){
    case '+': 
        result = n1 + n2 
        alert(`A soma de ${n1} com ${n2} e igual a ${result}`)
    break
    
    case '-':
        result = n1 - n2 
        alert(`A subtração de ${n1} com ${n2} e igual a ${result}`)
    break

    case '*':
        result = n1 * n2 
        alert(`A multiplicação de ${n1} com ${n2} e igual a ${result}`)
    break

    case '/':
        while(n2 == 0 ){
        var n2 = Number (prompt("Não e possivel fazer divisão por 0. Informe outro numero:\n"))
        }
        result = n1 / n2 
        alert(`A divisão de ${n1} com ${n2} e igual a ${result}`)   
    break

    
}
    var reset = (prompt('Deseja efetuar outro calculo ?\nResponda [1] para SIM e [2] para NÃO'))
}while(reset == 1 )
    alert('Programa finalizado')