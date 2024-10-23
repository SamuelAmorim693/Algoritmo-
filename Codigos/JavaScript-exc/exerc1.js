var nome = prompt("Informe seu nome: ") 
window.document.body.innerHTML = `Nome: ${nome}<br>`
window.document.body.innerHTML += `Quantidade de caracteres: <b>${nome.length}</b><br>`
window.document.body.innerHTML += `A segunda letra do nome e:  ${nome[1]}<br>` 
window.document.body.innerHTML += `A o primeiro indice da letra a do nome é: ${nome.indexOf('a')}<br>` 
window.document.body.innerHTML += `A o ultimo indice da letra a do nome é: ${nome.lestindexOf('a')}<br>` 

    