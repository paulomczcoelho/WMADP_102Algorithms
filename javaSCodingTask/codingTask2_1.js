
const mattScore = 88
const simonScore = 88
const lowerLimit = 51

if(mattScore >= lowerLimit && simonScore >= lowerLimit){
    console.log("Both students have passed the exam")
}else if(mattScore >= lowerLimit || simonScore >= lowerLimit){
    if(mattScore > simonScore){
        console.log('Matt is the one who passed')
    }else{
        console.log('Simon is the one who passed');
    }
}else{
    console.log('Both students have failed');
}