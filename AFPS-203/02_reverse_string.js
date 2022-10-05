function reverse(){
   let name = 'ossecus';
   var splitString = name.split('')
    console.log(splitString);
   var revertString = splitString.reverse();
    console.log(revertString);
   var joinString = revertString.join();
    console.log(joinString);
}
reverse()

/* EXAMPLE 2 */

function reverseString(str) {
    return str.split('').reverse().join('');

}
console.log(reverseString("1 olleH"));

/* EXAMPLE 3 */
function reverseStr(str){
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--){
      newString += str[i];     
    }
    return newString;
}
console.log(reverseStr('2 olleH'))

/* EXAMPLE 4 */
function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  console.log(reverseString("oãsruceR"))