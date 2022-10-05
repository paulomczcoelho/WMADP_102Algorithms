// /*===============HOSTING================*/

// let foo = 'foo'

// function bar(){
//     let baz = 'baz'
//     console.log(baz)
    
//     console.log(foo)
//     number = 42
//     console.log(number);
// }
// bar()

// ex2()

// var foo2;

// function ex2(){
//     console.log("banana");
// }
// ex2 = function(){
//     console.log("laranja do ex2 = function");
// };
// function ex2(){
//     console.log("melancia do function ex2");
// }

// //let ex2 = limao;
// /*===============HOSTING================*/


// /* ============CLOSURE=================*/



// function ex2(){ //escopo léxico para bar
//     var memory = 'isto é closure';
//     return function bar(){
//         console.log(memory);
//     }
// }

// var memory = null,
// baz = ex2();
// console.log(baz);


// /* ===========ESCOPO LEXICO ==========*/
// const external = () => {
//     const book = 'Sapiens'

//     const internal = () => {
//         console.log(book.toLocaleUpperCase());
//     }
//     internal();
// }

//var a = 10; console.log(a === window.a);

// function hi(){
//     console.log("hi");
//     function hello(){
//         console.log("hello");
//         function hey(){
//            console.log("hey");
//         }
//         hey()
//     }
//     hello();
// }
// hi();

// function myFunc(){//What will be the result in console.

//     var a = 10;
// }
// myFunc();
// console.log(a);

// console.log(a);//What will be the results in console?
// b();
// var a = 10;
// function b(){
//     console.log("hello");
// }

// if (true){ //What will be the result in console?
//     var a = 10;
// }else{
//     var b = 20;
// }
// console.log(a);
// console.log(b);

//What will be the result?
// var obj = {
//     name:'bob',
//     age:30,
//     address:{
//         city: 'New York',
//         street: 'Wall Str.',
//         defineThis:function(){
//             console.log(this === obj);
//         }
//     }
// }
// obj.address.defineThis();// false

var obj = {
    name: 'Bob',
    age: 38,
    defineThis: function(){
        function a(){
            console.log(this === obj);
        }
        a()
    },
}
obj.defineThis()