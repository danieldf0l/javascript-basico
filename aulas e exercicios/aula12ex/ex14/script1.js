function carregar() {
    var msg = window.document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = 23
    /*var hora = data.getHours()*/
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        img.src = "fotomanha.jpg"
        document.body.style.background = "#f2ca52"
    } else if ( hora >=12 && hora <= 18 ) {
        img.src = "fototarde.jpg"
        document.body.style.background = "#f29c6b"
    } else {
        img.src = "fotonoie.jpg"
        document.body.style.background = "#0a2626"
    }
}