function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hr = data.getHours()
    msg.innerHTML = `Agora são ${hr} horas`

    var corpo = window.document.getElementById('corpo')

    if (hr >= 0 && hr < 12){
        img.src="imagem/manha.png" 
        document.body.style.background = '#dccab2'

    }else if(hr >= 12 && hr <= 18){
        img.src="imagem/tarde.png"
        document.body.style.background = '#c58b59'
    }else{
        img.src="imagem/noite.png"
        document.body.style.background = '#312740'
    }
}



