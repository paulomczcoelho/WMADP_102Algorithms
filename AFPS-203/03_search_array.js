// var searchN = [1,2,3,4,5]
// var num = 1;
function contains(searchN, num){
    for (let i = 0; i < searchN.length; i++) 
    if ( searchN[i] === num){
        console.log('valor encontrado na ' + i + 'º posição');
    }else{
         console.log('Valor não encontrado');
    }
}
(contains([1,2,3,4,0,4,7,8,9,30,333,5], 5));

function search(sear, n){
    if( sear.indexOf(n) !== -1){
       armazena = n; 
       console.log("O numero " +n+ " está no índice " + sear.indexOf(n));
       console.log("valor na variavel armazena: " + armazena);
    }else{
       console.log("else");
    }
}
search([1,2,3,7,9,8,5,4], 5)