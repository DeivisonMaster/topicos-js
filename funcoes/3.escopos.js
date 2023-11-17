var nome = 'Teste'; // escopo global

var capitalizar = function(){
    var nome =  'Teste'.toUpperCase(); // escopo local
}

var capitalizar2 = function(){
    nome = nome.toUpperCase();
}

capitalizar();
console.log(nome);

capitalizar2();
console.log(nome);