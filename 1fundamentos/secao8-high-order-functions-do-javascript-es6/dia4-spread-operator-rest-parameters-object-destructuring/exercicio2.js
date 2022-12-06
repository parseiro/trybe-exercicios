const soma = (...numeros) => numeros.reduce((acumulador, proximo) => acumulador+proximo, 0);

console.log(soma(4,5,6));