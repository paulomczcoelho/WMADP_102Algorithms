

function grades (a){

    if (typeof a ==='number'){
     
        if(a === 100) {
            console.log("Perfect Score");
        }else if (a >=70 && a <100 ){
            console.log("Passed"); 
        }else if (a < 70 && a >=0){
            console.log("Failed");
        }else if (a < 0){
             console.log("Invalid grade");
        } 
    }else{
        console.log("grade is not a number, Invalid grade");
    }
}
console.log("________Exercise Nº 1");
grades(100);
grades(80);
grades(55);
grades(-10);

function evenOrOdd (n){
       
    if (n % 2 === 0){ 
        console.log("The number: ", + n, " is even")
    } else if (n % 2 === 1){ 
        console.log("The number: ", + n, " is odd");
    } else {
        console.log("invalid number");

    }
}

console.log("________Exercise Nº 2");
evenOrOdd(11);
evenOrOdd(10);

function posNeg (n1){
    
    if(typeof n1 ==='number'){
    
        if (n1 > 0){
            console.log("Positive");
        }else if (n1 < 0){
            console.log("Negative");
        }else if (n1 === 0){
            console.log("Zero");
        }
    }else{
        console.log("Invalid number");
    }
}
console.log("________Exercise Nº 3");
posNeg(1);
posNeg(0);
posNeg(-1);
posNeg("z");


const person = {
    name: 'Paul',
    age: 38,
    checkAge: function(){
        if(this.age > 17){
            return '"Adult"';//console.log("Adult");
        }else{
            return '"Minor"'//console.log("Minor");
        }
    },
    showAge: function(){
        return person.name + ' ' + person.checkAge();
    },
};

console.log("________Exercise Nº 4");
//console.log(person.name, person.checkAge());
console.log(person.showAge());


function concaString(a,b){
   var a = "Hello";
   var b = "World";
   
    if (typeof a ==='string' && typeof b ==='string'){
        console.log(a + b); 
        
    }else{
        
        if (typeof a !=='string'){
            console.log("invalid string");
        }else if(typeof b !=='string'){
            console.log("invalid string");
        }else if(typeof a !== 'string' && typeof b !=='string'){
            console.log("invalid string");
        }
    }   
}    
console.log("________Exercise Nº 5");
concaString();
   
const students = [
    {name: 'PC', score1: 93, score2: 89},
    {name: 'Bob', score1: 23, score2: 98},
    {name: 'John', score1: 43, score2: 35},
    {name: 'Alex', score1: 37, score2: 22},
    {name: 'Nick', score1: 44, score2: 80},

]
const scores = [91, 81, 71, 61, 51]
const degrees = ["A" ,"B", "C", "D", "E"]

const calcScore = (num1, num2) => num1 + num2;

const printResult = (name, sum, deg) => console.log(`${name} has a score of ${sum}, with a degree of ${deg}`);

function displayResult(){
    for(student of students){
        const sum =  calcScore(student.score1, student.score2)

        if(sum < scores[4]){
            printResult(student.name, sum)
        }else if(sum >= scores[4] && sum < scores[3]){
            printResult(student.name, sum, degrees[4])
        }else if(sum >= scores[3] && sum < scores[2]){
            printResult(student.name, sum, degrees[3])
        }else if(sum >= scores[2] && sum < scores[1]){
            printResult(student.name, sum, degrees[2])
        }else if(sum >= scores[1] && sum < scores[0]){
            printResult(student.name, sum, degrees[1]) 
        
        }else{
            printResult(student.name, sum, degrees[0])
        }
    }

}
displayResult()