"use strict";

var usuario = {
  nome: 'Felipe',
  idade: 25,
  endereco: {
    cidade: 'São Paulo',
    estado: 'SP'
  }
};
/*
//ES6 permite a desestruturação de um objeto para obter valores do mesmo.
//Ex:
const {nome, idade, endereco: {cidade}} = usuario;

console.log(nome, idade, cidade);
*/
//É possivel utilizar desestruturação como parametros de uma function.

function mostrarDados(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostrarDados(usuario);
