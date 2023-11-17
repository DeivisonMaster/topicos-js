var idade = 25;
console.log(typeof(idade));

// Problema ponto flutuante
var x = 0.3 - 0.2;
console.log(x);

// Solução
var x = (0.3 * 10 - 0.2 * 10) / 10;
console.log(x);

console.log(x.toFixed());
console.log(x.toString());

var y = 10 / '2';
console.log(y);

var w = 10 / 'Teste';
console.log(w);

var avalia = isNaN(w);
console.log(avalia == true ? 'é NaN' : 'não é NaN');