//ES6 permite atribuir valores padrão aos parametros de uma function.
//Ex:
const soma = (a = 7, b = 9) => a + b;

console.log(soma(10));
console.log(soma());