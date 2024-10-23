var n1 = Number (prompt ("Digite um número"))

window.document.body.innerHTML = `O número informado foi: ${n1}<br>`
window.document.body.innerHTML += `O número informado somado com 5 e igual a: ${n1+5}<br>`
window.document.body.innerHTML += `A raiz quadrada e: ${Math. sqrt(n1)}<br>`
window.document.body.innerHTML += `Arredondando para baixo ${parseInt(n1)}<br>`
window.document.body.innerHTML += `Arredondando para cima ${Math.round(n1)}<br>`
window.document.body.innerHTML += `Limitando em duas casa decimais ${n1.toFixed(2)}<br>`