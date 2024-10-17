function carregar(){
 var msg = document.querySelector('div#msg')
var img = document.querySelector('img#imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `agora sao ${hora} horas`
if (hora >= 0 && hora < 12) {
    img.src = 'fotomanha.png'
}   else if (hora >= 12 && hora <= 18) {
    img.src = 'fototarde.png'
} else {
    img.src = 'foto noite'
}
}
