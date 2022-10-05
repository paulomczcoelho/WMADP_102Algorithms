function isSortedAsc(arr){
  for(let i = 1; i < arr.length; i++){
       
    if (arr[i] < arr[i-1]){
      return false;   
    }
  }
  return true;
}
console.log(isSortedAsc([1,3,5,6,7]));

/*=========2º EXAMPLE================*/

array1 = [3,4,5,6,7,8,9,10,11]
const isSortAsc = (array1) => array1.every((value, index, array1) =>{
  return (array1[index -1] <= value) || (!index)
})
console.log(isSortAsc(array1));
console.log(isSortAsc([1,2,3,4,5]))
arr2 = [12, 5, 8, 130, 44].every(elem => elem >= 10)
console.log(arr2);
