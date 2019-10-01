const arr = [1, 2, 3, 4, 5];

//quando uma arrow function recebe eu posso descartar os parenteses.
//também posso descartar as chaves e o return caso o corpo do método tenha só uma expressão.
//Ex:
const newArray = arr.map(item => item * 2);

//para retornar um objeto via arrow function deve ser utlizado parenteses.
//Ex:
const obj = () => ({nome:'Felipe'});

console.log(newArray);
console.log(obj());