function contar(){
    let ini = document.getElementById("txtin")
    let fim = document.getElementById("txtfi")
    let pul = document.getElementById("txtpu")
    let res = document.getElementById("res")

    if (ini.value.length == 0 || fim.value.length == 0 || pul.value.length == 0){
        window.alert("[ERRO] faltam dados à serem inseridos!!")
    } else { 
        res.innerHTML = "Contando: <br> "
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pul.value)
        if (p <=0 ) {
            window.alert('Número inválido. Será considerado o número "1" ')
            p = 1
        }
        if ( i < f){
            for(let c = i; c <= f; c+=p){
                res.innerHTML += `${c} \u{1F449} `
            }
        } else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}