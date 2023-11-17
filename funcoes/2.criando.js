
// function declaration
function somar(a, b){
    return a + b;
}


// function expression
var subtrair = function(a, b){
    return a - b;
}

function divide(){
    console.log(arguments);
}

console.log(somar(2, 5));
console.log(subtrair(2, 4));
console.log(divide(10, 2));