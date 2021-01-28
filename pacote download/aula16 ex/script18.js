let num = document.getElementById("txtnum")
let tab = document.getElementById("selenum")
let res = document.querySelector("div#res")
let valores = []

function isnumero(n){
    if (Number(n) >=1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function inserir(){
    if (isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} foi adicionado.`
        tab.appendChild(item)
    } else {
        window.alert("[EERO] Numero inválido ou já inserido na lista.")
    }
    num.value = ""
    num.focus()
    res.innerHTML = ``
}
function finalizar(){
    if (valores.length == 0) {
        window.alert("[ERRO] Insira um número para continuar")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            } if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ""
        res.innerHTML += `<p>No total, são ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor número informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os números inseridos é ${soma}</p>`
        res.innerHTML += `<p>A média de todos esses valores é ${media}</p>`
    }
}