programa {
  funcao inicio() {
    real vetor[12], i, soma = 0, media 
   
    para(i = 0 ; i < 12; i++){
      escreva("Informe o valor recebido no ",i+1,"° mês: \r")
      leia(vetor[i])
      soma = soma + vetor[i]
    }
    media = soma/12
    se(media <= 350.00){
      escreva("A valor do seu empréstimo e de 10%, sendo assim, o sando desponível e de ",media*0.1)
    }
    senao se(media <=600.00){
      escreva("A valor do seu empréstimo e de 20%, sendo assim, o sando desponível e de ",media*0.2)
    }
    senao se(media <= 850.00){
      escreva("A valor do seu empréstimo e de 35%, sendo assim, o sando desponível e de ",media*0.35)
    }
    senao{
      escreva("A valor do seu empréstimo e de 55%, sendo assim, o sando desponível e de ",media*0.55)
    }
  }
}
