function contar() {
    let inicio = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO!] Faltam Informações!')
        res.innerHTML = `Impossivel Contar \u{1f972}`
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if(p <= 0) {
            window.alert('Passo Inválido! Considerando isso, passo vale 1');
            p = 1;
        }
        
        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p ) {    
                res.innerHTML += `${c} \u{1f449}` 
            }
        } else {
            //contagem regreciva
            for(c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}` 
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}