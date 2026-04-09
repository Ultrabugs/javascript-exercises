const palindromes = function (input) {
    
    // convert input to array lower cased
    const cleanedString = input.split(" ").join("").toLowerCase();
    const inputString = cleanedString.split(",").join("");
    const inputArray = Array.from(inputString.toLowerCase().trim());
    const nonReversedInputString = inputArray.join("");
    
    if(inputArray.includes("!")){
        let locationToSlice = inputArray.indexOf("!");
        inputArray.splice(locationToSlice, 1)
       
    }
    
    if(inputArray.includes(".")) {
        let locationToSlice = inputArray.indexOf(".");
        inputArray.splice(locationToSlice, 1);
    }
    
    const regularInput = inputArray.join("");
    const reversedInput = inputArray.reverse();
   
    const reversedInputToString = reversedInput.join("");
    
    console.log(regularInput)
    console.log(reversedInputToString)
    
    return regularInput === reversedInputToString ? true : false;
    
};
 
 
 
 
 

// Do not edit below this line
module.exports = palindromes;


// const palindromes = function (input) {
    
    
//     const inputArray = Array.from(input);
    
//     if(inputArray.includes("!")){
//         let locationToSlice = inputArray.indexOf("!");
//         inputArray.splice(locationToSlice, 1)
       
//     }
    
//     console.log(inputArray);
    
//     const reversedInput = inputArray.reverse();
    
//     console.log(reversedInput); 
    
//     const reversedInputToString = reversedInput.join("");

//     const nonReversedInputString = inputArray.join("");
    
//     console.log(reversedInputToString)
//     console.log(nonReversedInputString)
    
    
//     return reversedInputToString === nonReversedInputString ? console.log("true") : console.log("false")
// };
 
// palindromes("race");



// const palindromes = function (input) {
    
    
//     const inputArray = Array.from(input.toLowerCase());
//     const nonReversedInputString = inputArray.join("");
    
//     if(inputArray.includes("!")){
//         let locationToSlice = inputArray.indexOf("!");
//         inputArray.splice(locationToSlice, 1)
       
//     }
    
//     console.log(inputArray);
    
//     const reversedInput = inputArray.reverse();
    
//     console.log(reversedInput); 
    
//     const reversedInputToString = reversedInput.join("");

    
    
//     console.log(reversedInputToString)
//     console.log(nonReversedInputString)
    
    
//     return reversedInputToString === nonReversedInputString ? console.log("true") : console.log("false")
// };
 
// palindromes("Animal loots foliated detail of stool lamina.");