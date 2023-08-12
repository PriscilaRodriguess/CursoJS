    let valor = [0,1,2,3,4,5,6,7,8,9];
    console.log(valor);

    for (let pos = 0; pos < valor.length; pos++) {
        console.log(`A posição ${pos} tem o valor ${valor[pos]}`);
    };

    for (let pos in valor) {
        console.log(valor[pos])  
    }