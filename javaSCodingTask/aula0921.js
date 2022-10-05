// //Variable Scope
// debugger;

// //Global Scope
// var x = 0;
// var y = 'abc';
// function fn(){
//     return "hello"
// }

// const anotherFN = fn;
// console.log(anotherFN());

// var i =1;
// var msg = '';
// while (i < 10){
//     msg += i +' x 5 = ' + ( i * 5) + '\n';
//     i++;
// }
// console.log(msg);

// console.log("Hello Class")
// // console.log("Commenting a code out")

// var someVariable = 'Teste'
// console.log('someVariable: ', typeof someVariable)

// var fullName = "Adam Sandler"
// console.log(fullName);

// //global scope
// let greeting = 'Hello World na função global'; 
// function greet(){
//     console.log(greeting);
// }
// greet();

//Escopo local
// function greet(){
//     var greeting = 'Hello Word na função local';
//     console.log(greeting);
// }
// greet();

//ambito aninhado
// var name = 'pedro';
// function greet(){
//     var greeting = 'hello';
//     {
//         let lang = 'English';
//         console.log(`${lang}: ${greeting} ${name}`); 
//     }
// }
// greet();    

// function pedirComida(){
//      comida = 'pizza';
//     console.log('Eu quero uma ' + comida);
// }
// pedirComida();
// console.log(comida); //= erro
//const external = ()

// function minhaFuncao(objeto) {
//     objeto.make = "Toyota";
// }  
  
//   var meucarro = {make: "Honda", model: "Accord", year: 1998};
//   var x, y;
  
//   x = meucarro.make;     // x recebe o valor "Honda"
  
//   minhaFuncao(meucarro);
//   y = meucarro.make;
  
//   console.log('"y" = a ' + y + ' "x" = ' + x);



// var square = function(numero) {
//     console.log(numero * numero)
// };

// var x = square(4) //x recebe o valor 16

// console.log(square(5));
// square(5);

// for(i=0; i<10; i++){
//     console.count('Counter 1')
// }
// console.countReset('Counter 1')

// function Teste(a, b){
//     return console.log( "Olá", a + b);
//     console.log(a + b) //código inalcançável!!
    
// }
// Teste(10, 10) //imprime Olá

// function Teste(a, b){
//     return console.log("Olá")
//     return(console.log(a + b)) //também inalcançável
// }
// Teste(5,5) //continua imprimindo apenas o Olá

// function saudacao(){
//     return "Olá!"
// }
// saudacao()
// console.log(saudacao());

// const Pessoa = {
//     nome: 'PC',
//     lname:'Coelho',

//     obterInfor: function(){
//         console.log(this.nome, this.lname);
//         console.log(Pessoa.nome, Pessoa.lname);
//     },
// };
// Pessoa.obterInfor();

// function Pessoa(nome, lname){
//     this.nome = nome;
//     this.lname = lname;
    
//     this.obterInfor = function (){
//         console.log(this.nome, this.lname);
//     };
// }

// const pessoa1 = new Pessoa("Pedro", "Souza");
// pessoa1.obterInfor();

// let person = {
//     firstName: 'Jonh',
//     lastName: 'carter'
// };


// function getL(ct, ctry, cont){
//     console.log(ct, ctry, cont)
// }
// getL('Milan');


var frutas = ['Maçã', 'Banana'];
//console.log(frutas[-1]);
// 2
frutas.forEach(function(item, indice, array){
    console.log(item, indice);
})
console.log("_______First forEach_______")

//add um item ao final do array
var adicionar = frutas.push('Laranja');

frutas.forEach(function(item, indice, array){
    console.log(item, indice);
})
//add dois item ao final do array
var adicionar = frutas.push('Melancia', 'Manga');
console.log(frutas)

frutas.forEach(function(item, indice, array){
    console.log(item, indice); 
    //[Maçã 0 Banana 1 Laranja 2 Melancia 3 Manga 4]
})

//Removendo um item do final do array
var ultimo = frutas.pop(); 
console.log(frutas)
//[ 'Maçã', 'Banana', 'Laranja', 'Melancia' ]

//Removendo 1º item do inicio do array
var primeiro = frutas.shift();
console.log(frutas);
//[ 'Banana', 'Laranja', 'Melancia' ]

//Adicionando ao início do Array
var adicionar = frutas.unshift('Morango')
console.log(frutas);
//[ 'Morango', 'Banana', 'Laranja', 'Melancia' ]

//Procurar o indice de um item no Array
 frutas.push('Limao');
 var pos = frutas.indexOf('Limao');
 

 //REMOVER um item pela posição do índice
 var pos = 0;
 var n = 4;
 var removedItem = frutas.splice(pos, n)
 //console.log("A fruta removida foi: " + frutas[1]);
 console.log(frutas);


//  var vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
// console.log(vegetais);
// // ['Repolho', 'Nabo', 'Rabanete', 'Cenoura']

// var pos = 0, n = 2;

// var itensRemovidos = vegetais.splice(pos, n);
// // Isso é como se faz para remover itens, n define o número de itens a se remover,
// // a partir da posição (pos) em direção ao fim da array.

// console.log(vegetais);
// console.log(itensRemovidos);