let posValues = [3,11]
let negValues = [-5,-6,12]
function somAll(posValues){
    let soma = 0;

    for (let i = 0; i < posValues.length; i++){
        soma = soma + posValues[i];
    }
    return console.log(soma);
}

somAll(negValues);