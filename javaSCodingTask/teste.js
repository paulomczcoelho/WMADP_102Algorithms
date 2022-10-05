// var today = new Date();
// var hourNow = today.getHours();
// var greeting;

// if (hourNow > 18){
//     greeting ='good e';
// }else if(hourNow > 12){
//     greeting ='good after';
// }else if (hourNow > 0){
//     greeting = ' good morning';
// }else{
//     greeting ='welcome';
// }
// console.log(greeting);

//example for array

var colors;
colors = ['white',
          'black',
          'custom'];
// index   Value
//   0    'white'
//   1    'black'
//   2    'custom'   
//ex acessando itens no array
var itemThree;

showColor = colors[1];
console.log(showColor);
//Number of items in an array
var numColors;
numColors = colors.length;
console.log(numColors + " cores no array colors");
//alterando o 3º item no array
colors[1] = 'Blue';
console.log(showColor);
