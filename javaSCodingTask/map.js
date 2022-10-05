/* ================================================================================================
    map() => para traduzir ou mapear todos os elementos de um array para outro conjunto de valores
   ================================================================================================*/

// formas de usar o map   
const numbers =[1, 4, 5, 9, 14, 23]
const doubleNumbers = numbers.map( function( elem ) { //função anonima
    return elem * 2;
})
console.log('=======Result com função anonima=========');
console.log(doubleNumbers);console.log("");
   
function doubleNumber(num){//Exemplo com função declarada
    return num * 2
}
console.log('=======Result com função declarada=========');
const ddoubleNumber = numbers.map(doubleNumber)
console.log(ddoubleNumber);console.log("");

console.log('=======Result com arrow function=========');
const doubNumber = numbers.map(num => num * 2)
console.log(doubNumber);console.log("");

/* ==========================Convertendo Fahrenheit to Celcius =====================================*/

const fahrenheit = [0, 32, 45, 50, 75, 80, 120 ]

const celcius = fahrenheit.map(function( elem ){ //Função anonima
    return Math.round((elem - 32) * 5/9) 
})
console.log('=======Converted com função anonima=========');
console.log(celcius);console.log("");

function convCelciusToF(c){
    return Math.round((c - 32) * 5/9)
}
const ccelcius = fahrenheit.map(convCelciusToF)
console.log('=======Converted com função declarada=========');
console.log(ccelcius);

const celc = fahrenheit.map( c => Math.round((c -32) * 5/9));
console.log('=======Result com arrow function=========');
console.log(celc)

/* map()============================================================================================*/
    
   
const isSortedAsc = (arr) => arr.every((value, index, arr) => {
 //console.log(isSortedAsc);
 return (arr[index - 1] <= value) || (!index)
})
console.log(isSortedAsc([]))
console.log(isSortedAsc([1,2,3,4,5]))
console.log(isSortedAsc([1,2,7,4,5]))

/* ================================================================================================
    filter() quando for preciso remover elementos indesejados com base em algumas condiçoes filter retorna um novo array Object
   ================================================================================================*/
const yetAnotherArray = ("22,2,1,11,5,8,2,1,5,55,7,87,1,2,78,5,11,35,3")
const uniqueArray = yetAnotherArray.filter (( elem, index, arr) => arr.indexOf(elem) === index) 
console.log(uniqueArray);



/* filter()====================================================================================*/
    
/* ================================================================================================
    reduce() encontrar o valor comulativo concatenado com base em elementos de todo o array.

   ================================================================================================*/

const rockets = [
    { country:"Russia", launches: 32},
    { country:"US", launches: 23},
    { country:"China", launches: 16},
    { country:"Europe", launches: 7},
    { country:"India", launches: 4},
    { country:"Japan", launches: 3},

]   

const totalLauches = rockets.reduce(( prevVal, elem) => prevVal + elem.launches, 0)
console.log(totalLauches);

console.log(rockets[0])

rockets.forEach(function(item, indice, array){
    console.log(indice);
})


/* ================================================================================================
    every() Usar quando for preciso testar se todos os elementos de um array passa por um teste especifico
    retona um valor booleano.
   ================================================================================================*/

const everyArray = [10,5,50,55,2,1,3,5,4];
console.log( everyArray.every( elem => elem > 10))

const turma = [
    {id: 52, name:"Pc", age: 38},
    {id: 51, name:"Joao", age: 18},
    {id: 52, name:"Clara", age: 38},
    {id: 52, name:"pp", age: 78},

]

console.log(turma.every( p=> p.age < 18))
