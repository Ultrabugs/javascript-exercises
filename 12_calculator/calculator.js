const add = function (a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let result = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return result;
};

const multiply = function(arr) {
  let result = arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  });
  return result; 
};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(a) {
  if(a === 0 || a === 1) {
    return 1;
  }

  let newArray = [];
  for(a ; a >= 1; a--) {
      newArray.push(a);
  }
  
  console.log(newArray);
  
  let result = newArray.reduce((accumulator, value) => {
      return accumulator * value;
  });
  
  return result;
	
};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
