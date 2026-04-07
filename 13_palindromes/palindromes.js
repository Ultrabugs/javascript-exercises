const palindromes = function (input) {
    
    let hasPunctuation = false;
    let ConvertInputToArray = [...input];
    let ReversedInputArray = ConvertInputToArray.sort((a, b) => b - a ? 1 : -1);
    
    if(ReversedInputArray.includes("!")) {
        hasPunctuation = true;
    }
     
    let revertedBackToString = ReversedInputArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    
    if(hasPunctuation === true) {
        let RemovedPunctuationString = revertedBackToString.slice(1);
        return RemovedPunctuationString + '!' === input ? true : false;
    } else {
        return revertedBackToString === input ? true : false 
    }
    
};

// Do not edit below this line
module.exports = palindromes;
