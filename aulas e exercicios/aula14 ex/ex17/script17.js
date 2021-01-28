function multiplicar(){
    let num = document.getElementById("txtnu")
    let tab = document.getElementById("seletab")
    if(num.value.length == 0) {
        window.alert("Por favor, Insira um número para continuar.")
    } else{
        let n = Number(num.value)
        tab.innerHTML =" "
        for (let c = 1; c <= 10; c++){
            let item = document.createElement("option")
            item.text = `${n} X ${c} = ${n*c}`
            item.value =`tab${c}`
            tab.appendChild(item)
        }
    }
}