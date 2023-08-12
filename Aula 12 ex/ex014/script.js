function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'manha.png'
        document.body.style.background = '#CFBF90';
    } else if (hora >= 12 && hora <18){
        //Boa Tarde!
        img.src = 'tarde.png'
        document.body.style.background = '#C97937';
    } else {
        //Boa Noite!
        img.src = 'noite.png'
        document.body.style.background = '#137C99';
    }
}