"use strict";

//ES6 permite atribuir valores padrão aos parametros de uma function.
//Ex:
var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9;
  return a + b;
};

console.log(soma(10));
console.log(soma());
