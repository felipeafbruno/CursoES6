//REST
const usuario = {
    nome : 'Felipe',
    idade : 25,
    cidade : 'São Paulo'
}

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

//Posso utilizar Rest em estruturas de Array.
const array = [1, 2, 3, 4, 5, 6];

const [a, b, ...c] = array;

console.log(a);
console.log(b);
console.log(c);

//Posso também utilizar em parametros da function.
function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1,2,3,4,5,6));

//SPREAD
const usuario1 = {
    nome : 'Felipe',
    idade : 25,
    cidade : 'São Paulo'
}

//sobrepor o valor do atributo do obj usuario.
const usuario2 = {...usuario1, nome: 'Bernardinho'};
console.log(usuario2);

const array1 = [1, 3, 5, 6];
const array2 = [2, 4, 7];

//preencher um terceiro vetor utilizando o SPREAD.
const array3 = [...array1, ...array2];

console.log(array3);
