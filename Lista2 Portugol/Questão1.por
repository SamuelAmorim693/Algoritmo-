programa {
  funcao inicio() {
    inteiro i, num1, num2, soma = 0
    
    escreva("Informe um número: ")
    leia(num1)
    escreva("Informe outro número: ")
    leia(num2)

    para(num1; num1 <= num2; num1++){
     soma = soma + num1
    }
     escreva(soma)

  }
}
