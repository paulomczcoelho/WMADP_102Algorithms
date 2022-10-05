// const students = [ 
//     {nome:'PC', score1: 47, score2:46},
//     {nome:'Bob', score1: 23, score2:24},
//     {nome:'Marley', score1: 40, score2:35},
//     {nome:'Alex', score1: 44, score2:45},

// ];
    
// function cont(){
//     num = 9;
//     for (i = num; i <= 15; i++){
//         console.log("Show cont:", + i)
//     }
// }
// cont();

function enquanto(){
     
    let cont = 0;
    
    let numb = Math.floor(Math.random() * 10 ) ;
       
    if (numb % 2 == 0){
   
        while ( cont < 5){
            console.log("numero sorteado " + numb +" usando while: ", + cont);
            ++cont;
        }
    }else{
        cont = 15 
        while (cont <= 20){
            console.log("numero sorteado " + numb +" caiu no else: ", + cont);
            cont++;
        }
 }
}
console.log("_____function enquanto()");
enquanto();
