let agora = new Date()
let hora = agora.getHours()
let smg = document.getElementById('msg')
let img = document.getElementById('imagem')
msg.innerHTML = `a gora  sao ${hora} horas`



if(hora >= 0 && hora < 12 ){
    img.src = 'fotomanha.png'
    
}else if(hora >=12 && hora <= 18){
    img.src = 'fototarde.png'
}else (
    img.src = 'fotonoite.png'
)