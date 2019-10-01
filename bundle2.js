"use strict";

//constantes não podem ter o seu valor atribuido novamente.
var a = 1;

function teste(x) {
  //variável de escopo.
  //uma variável declarada com let será acessada apenas dentro do escopo onde foi declarada.
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

teste(10);
