var meuArray = [1, 2, 3, 4, 5, 6];

//retorna um novo array com os elementos que passaram pela function callback enviada como parametro.
const novoArray = meuArray.map(function(item, index) {
    return item + index;
});

console.log(novoArray);

//retorna o resultado acumulado da função que foi executada sobre o valores do array.
const sum = meuArray.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

//filter vai filtrar apenas o/os valores encontrados no array por meio da função callback.
const filter = meuArray.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

//retorna a primeira ocorrência que der verdadeiro.
const find = meuArray.find(function(item) {
    return item === 2;
});

console.log(find);