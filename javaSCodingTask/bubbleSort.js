var items = [9,5,3,2,4,1]

// function bubbleSort(items){ //versão O(n2)
//     for(let j = 0; j < items.length -1; j++) {
//         for( let i = 0; i < items.length -1; i++ ) {
//             if( items[i] > items[i+1]) {
//                 [items[i], items[i+1]] = [items [i+1], items[i]]
//             }
//         }
//         console.log(items);
//     }
//     return items;
// }
// bubbleSort(items);

// function bubbleSort(items){
//     for( let last = items.length -1; last > 0; last--){
//         for(let i = 0; i < items.length -1; i++){
//             if(items[i] > items[i+1]) {
//                [items[i], items[i+1] = items[i+1], items[i]]
//             }
//         }
//         console.log(items);
//     }
//     return items;
// }
// bubbleSort(items);

function bubbleSort(items){
    let swap;
    let last = items.length -1;
    do{
        swap = false;
        for(let i = 0; i < items.length; i++) {
            if (items[i] > items[i+1]){
                [items[i], items[i+1]] = [items[i+1], items[i]];
                swap = true;
            }
        }
        last--;
        console.log(items); //var items = [9,5,3,2,4,1]
    }while(swap)
    return items;
}
//console.log(bubbleSort(items));

function bubbleSort(items){
    for( let last = items.length -1; last > 0; last--){
        for(let i = 0; i < items.length -1; i++){
            if(items[i] > items[i+1]) {
                aux = items[i];
                items[i] = items[i+1];
                items[i+1] = aux;
            }
        }
        console.log(items);
    }
    return items;
}
bubbleSort(items);