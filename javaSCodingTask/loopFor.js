// var loopFor = 20;

// for (let i = 20; i > 0; i--){

//     console.log("Valor de i: " + i);

// }    


        /* ORDENAÇÃO DE VALORES NO ARRAY */
var pessoas = ['Paulo','Maria','Ana','Birgit', 'Pablo', 'Carlos','Abinael','Briza', 'Lua'];

console.log(" ============ ordenando strings =========")
for (let i = 0; i < pessoas.length; i++){
    pessoas.sort();
    console.log('Pessoas no array: ' + pessoas[i]);
}

console.log(" ============ invertendo ordenação de strings =========")
for (let i = 0; i < pessoas.length; i++){
    pessoas.reverse()
    console.log('pessoas.reverse() = ' + pessoas[i]);
}


let arNum = [11,1,222,3,44,5,64,2,9,50,70].sort();
console.log(arNum + " Teste usando sort na declaração da variavel.");
function ordenarNumb(a,b){//para ordenação de numeros, o melhor jeito.
    return a>b ? 1 : a < b ? -1: 0;
}
function ordanando(a,b){
    return a - b;
}
function ordenarDecr(a,b){
    return b - a;
}
console.log("====== Ordenando arNum.sort() =======");
for (i = 0; i< arNum.length; i++){
    arNum.sort();
    console.log("Ordenando arNum.sort(): ", arNum[i])
}
console.log("====== Ordenando arNum com função ======");
for (i = 0; i< arNum.length; i++){
    arNum.sort(ordanando);
    console.log("Ordenando arNum.sort(ordenando): ", arNum[i])
}
console.log("+====Ordenando com função======+");
for (i = 0; i< arNum.length; i++){
    arNum.sort(ordenarNumb);
    console.log(arNum[i]);
}
console.log("+====Ordenando decrescente com função======+");
for (i = 0; i< arNum.length; i++){
    arNum.sort(ordenarDecr);
    console.log(arNum[i]);
}
console.log('Mostrando os pares');
for (i = 0; i < arNum.length; i++){
    if (arNum[i] % 2 == 0){
        console.log("Numeros pares" + arNum[i]);
    }    
}
console.log('Mostrando os impares');
for (i = 0; i < arNum.length; i++){
    if (arNum[i] % 2 == 1){
        console.log("Numeros impares" + arNum[i]);
    }    
}
// let tabuadaSoma = 1;
// let numeros = 1;
// for (i = 1; i < 10; i ++){
//     numeros = i + tabuadaSoma;
//     console.log(tabuadaSoma + " + " + i + " = " + numeros);
// }


tab = [1,2,3,4,5,6,7,8,9]
var num = 1;
for (i = 0; i < tab.length; i++){
    result = tab[i] + num ;
    console.log('Result = ' + num + ' + ' + tab[i] + ' = ' + result )
}
