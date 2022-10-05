        /*Aula youtube o que é array em javascript?*/

//criando array
//var tmpMdiaEx = []; // array vazio
//var tempMedia = [31.9, 35.4, 26.4, 24.3, 22.9];

//Sintax - Utilizando construtor new
//var tempMd = new Array(); //cria array vazio
//var tempMd = new Array(5);//cria array com 5 elementos
//var tempMd = new Array(31.9, 35.4 , 26.4, 24.3, 22.9);//cria e passa os valores do array

const tempMedia = [];
tempMedia[0] = 31.9;
tempMedia[1] = 35.4;
tempMedia[2] = 26.4;
tempMedia[3] = 24.3;
tempMedia[4] = 22.9;

console.log("Percorrendo o array com forEach e mostrando item e indice ")
tempMedia.forEach(function(item, indice, array){
    console.log("Show item: " + item + " and indice: " + indice); 
})
console.log(" ");
console.log("função para apresentar o itens do array")
function showData(){
    for(i = 0; i < tempMedia.length; i++){
        console.log(tempMedia[i]);
    }
}
showData()

//contar a quantidade do arrays
var qnt = tempMedia.length;
console.log("A quantidade de intens do array é: " + qnt);

//acessar o primeiro item do array
console.log("acessar o primeiro item do array " + tempMedia[0]);

//acessa o index do array
var lookIndex = tempMedia.indexOf(26.4);
console.log("acessando o index do item 26.4 do array = " + lookIndex);

//adicionando um item no final do array
tempMedia.push(20.9);
console.log(tempMedia);

//adicionando um item no inicio do array
tempMedia.unshift(33.3);
console.log(tempMedia)

//Removendo um item do final do array
var ultimoItem = tempMedia.pop()
console.log(tempMedia);
console.log("Ultimo item removido " + ultimoItem)

//Remover do inicio do array
var rvInicio = tempMedia.shift();
console.log("Item removido do inicio do arrar: " + rvInicio)
console.log(tempMedia)

//Remove um item pela posição do indice
var rmvPorIndice = tempMedia.splice(1, 1);
console.log("Item removido informando o index foi: " + rmvPorIndice);
console.log(tempMedia);

//Ler o um Array
console.log("Lendo o array com forEach") 
tempMedia.forEach(function(item, indice, array){
    console.log(item, indice);
})
console.log("Lendo o array com for");
for (i = 0; i < tempMedia.length; i++){
    console.log(tempMedia[i]);
}

/* =========================================================================
    EXEMPLOS DE ARRAY DA UDEMY
   =======================================================================*/
//2º var salada = ['Uva','Laranja','Banana'] 
var salada = new Array();
    salada[0] = "Uva";
    salada[1] = "Laranja";
    salada[2] = "Banana";
    salada[3] = "Limao"
    console.log(salada)
    
//INSERINDO E REMOVENDO ELEMENTOS NO ARRAY
   
//Metodo "push" adiciona o elemento no final do array.
salada.push('Mamao');
console.log(salada)

//Metodo "unshift" adiciona elemento no inicio do array.
salada.unshift('Abacate')
console.log(salada)

//Metodo "pop" exclui o ultimo elemento do array
ex = salada.pop()
console.log(salada + ". - A fruta excluida foi: " + ex);

//Metodo "shift()" exclui o primeiro elemento do array
salada.shift()
console.log(salada);

//Recebendo o numero de elementos do array passando a variavel.length     
console.log("O Array salada tem " + salada.length + " elementos") 

//METODO DE PESQUISA DENTRO DO ARRAY indexOf()
//IndexOf() retorna o valor da possição do elemento dentro do array.
pesquisa = salada.indexOf("Banana");

console.log(pesquisa)

//ORDENANDO OS ELEMENTOS DO ARRAY
//Metodo "sort()" ordena os elementos em ordem alfabetica
salada.sort();
console.log(salada);

salada.indexOf('Banana');

var arrNumb = [1, 5, 29, 4, 2 ,39, 8, 25, 6, 41, 9]
ordenar = arrNumb.sort();
console.log(ordenar + 'OS NUMEROS ORDENADOS SAO:');



/* ============================================================================
   Array.indexOf() Encontrando as ocorrencias de um elemento
   ============================================================================*/
 //ar.push(11);
 //var show = ar.indexOf(11);
 //console.log(show);
   
var indices = [];
var array = ['a','1','a',1,'a','d',]
var elemento = 'a'; // a variavel com valor 'a' é o elemento que quero ver quantas vezes ele esta dentro do vetor

var idx = array.indexOf(elemento);
while (idx != -1){
    indices.push(idx);
    idx = array.indexOf(elemento, idx + 1)
}
if(indices.length === 1){
    console.log('O elemento "' + elemento + '" aparece ' + indices.length + ' vez na posição: ' + indices);
}else{
    console.log('O elemento "' + elemento + '" repete ' + indices.length + ' vezes nas posiçoes: ' + indices);
}
  
/* ============================================================================
   Array.indexOf() Encontrando se um elemento existe ou nao e atualizar o array
   ============================================================================*/

function atualizarColecaoVegetais (vegetais, veg) { /* array vegetais[] e veg sao os parametros da função */
    if(vegetais.indexOf(veg) === -1){ /*array vegetais - veg vai receber o valor do indexOf */
        vegetais.push(veg);
        console.log('Nova coleção de vegetais é :' + vegetais);
    }else if (vegetais.indexOf(veg) > -1) {
        console.log(veg + ' Já existe na coleção de vegetais');

    }    
}

var vegetais = ['batata', 'tomate', 'pimenta', 'pimentao'];

atualizarColecaoVegetais(vegetais, 'alface');
console.log(vegetais);

function apresentar(){
    
    let texto = '';
    for(i = 0; i < vegetais.length; i++){
        texto = texto + vegetais[i];
    }
    return texto;
}
apresentar();

/* ============================================================================
   Somando os valores do array
   ============================================================================*/
var lista = [10,20,30,55];
var soma1 = 0;

// for (let i = 0; i < lista.length; i++){
//     soma1 = soma1 + lista[i]
// }
// console.log(soma1)


function somarTodos(lista){
    let soma = 0;

    for (let i = 0; i < lista.length; i++){
        soma = soma + lista[i]
    }
    return console.log(soma);
}
somarTodos(lista);

var arrEx = [1,2,3,4,5,10];

function simpleSoma(arrEx){
    let add = 0;
    
    for(i = 0; i < arrEx.length; i++){
    add = add + arrEx[i]
    }
    return add;
}
