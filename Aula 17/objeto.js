let amigo = {
    nome: 'Priscila',
    idade: 20,
    sexo: 'Feminino',
    peso: 70.0,
    engordar(p = 0){
        console.log('Engordou')
        this.peso += p
    }};
    amigo.engordar(2);
    console.log(`Eu ${amigo.nome} peso ${amigo.peso}Kg`);