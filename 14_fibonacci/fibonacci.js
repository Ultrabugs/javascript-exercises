 const fibonacci = function(number) {

    if(number < 0) {
        return 'OOPS';
    }

    let secondLastNumber = 1;
    let lastNumber = 1;
    let storedNumber;
    
    let numberArray = [0];
    numberArray.push(secondLastNumber);
    numberArray.push(lastNumber);
    
    for(let x = 0; x <= number; x++){
        
        storedNumber = secondLastNumber + lastNumber;

        secondLastNumber = lastNumber;

        lastNumber = storedNumber;
        numberArray.push(lastNumber);
         
    }

    return numberArray[number];
}

fibonacci();

// Do not edit below this line
module.exports = fibonacci;
