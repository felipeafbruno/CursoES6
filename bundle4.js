"use strict";

var arr = [1, 2, 3, 4, 5]; //quando uma arrow function recebe eu posso descartar os parenteses.
//também posso descartar as chaves e o return caso o corpo do método tenha só uma expressão.
//Ex:

var newArray = arr.map(function (item) {
  return item * 2;
}); //para retornar um objeto via arrow function deve ser utlizado parenteses.
//Ex:

var obj = function obj() {
  return {
    nome: 'Felipe'
  };
};

console.log(newArray);
console.log(obj());
