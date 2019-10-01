//constantes não podem ter o seu valor atribuido novamente.
const a = 1;

function teste(x) {
    //variável de escopo.
    //uma variável declarada com let será acessada apenas dentro do escopo onde foi declarada.
    let y = 2;

    if(x > 5) {
        console.log(x, y);
    }
}

teste(10);