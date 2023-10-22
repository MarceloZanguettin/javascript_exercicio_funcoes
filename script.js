function isTruthy(dado) {
  return !!dado;
}

function perimetroQuadrado(lado) {
  return lado * 4;
}

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

function isEven(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}

function tipoDeDado(dado) {
  return typeof dado;
}

// Função que retorna o seu nome completo quando o evento 'scroll' ocorrer
addEventListener("scroll", function () {
  console.log("Marcelo Zanguettin");
});

// Função que retorna o seu nome completo quando o evento 'click' ocorrer
addEventListener("click", function () {
  console.log("Marcelo Zanguettin");
});
