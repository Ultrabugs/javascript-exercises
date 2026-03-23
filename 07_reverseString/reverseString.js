const reverseString = function(value) {
    let arr = value.split("");
    let newString = '';
    
    for(let x = arr.length - 1; x >= 0; x--){
        newString += arr[x];
         
    }
    
    return newString;
};

// Do not edit below this line
module.exports = reverseString;


 