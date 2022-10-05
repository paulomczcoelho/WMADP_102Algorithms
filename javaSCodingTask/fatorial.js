var fatorial = 4;
var resultado = fatorial;
for (var i = 1; i < fatorial; i++){
  resultado = resultado * i;
}
console.log('example 1');
console.log(resultado);

 /* ============EXAMPLE 2 =========*/
var fatorial2 = 5;
var resultado2 = fatorial2;
var primeiroMultiplicador = fatorial2 - 1;
for (var i = primeiroMultiplicador; i > 1; i--) {
    resultado2 = resultado2 * i;
}
console.log("example 2");
console.log(resultado2);

/* ==============EXAMPLE 3 =============*/
function calcFatorial(fatorial){
  if (fatorial === 0 || fatorial === 1) {
    return 1;
  }       
  var resultado = fatorial;
  var primeiroMultiplicador = fatorial - 1;
  for (var i = primeiroMultiplicador; i > 1; i--) {
    resultado = resultado * i;
  }
  return resultado;
}
console.log("Example 3");
console.log(calcFatorial(6));

/* ==============EXAMPLE 4 =============*/

// function calcFactReursiv (n){
//     if (n === 1) {
//         return 1;
//     }
//     return n * calcFactReursiv (n - 1);
// }
// function calcFatorial2(fatorial) {
//     if (fatorial === 0 || fatorial === 1) {
//         return 1;
//     } 
//     return calcFactReursiv(fatorial);
// }
// console.log("exemple 4");
// console.log(calcFatorial2(4));

// var ex = new Array(80, 50);
// var ex2 = [81, 51];

// console.log(ex);
// console.log(ex2);
x=1;
i=2;

let soma = x + i;
function somar(x, i){
    return soma;
}
console.log(somar(x,i));
