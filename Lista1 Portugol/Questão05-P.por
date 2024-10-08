programa
{
	
	funcao inicio()
	{
		real peso, altura, imc 

		escreva("Informe seu peso: ")
		leia(peso)
		
		escreva("Agora informe sua altura: ")
		leia(altura)

		imc = peso/(altura*altura)

		se(imc <= 18.5){
			escreva("Você esta classificado com magreza e seu grau de obesidade 0 ")
		}
		senao se(imc <= 24.9){
			escreva("Você esta classificado como normal e seu grau de obesidade 0 ")
			}
		senao se(imc <= 29.9){
			escreva("Você esta classificado com sobrepeso e seu grau de obesidade 1 ")
			}	
		senao se(imc <= 39.9){
			escreva("Você esta classificado com obesidade e seu grau de obesidade 2 ")
			}
		senao{	
			escreva("Você esta classificado com obesidade grave e seu grau de obesidade 3")
		}
		}
}
