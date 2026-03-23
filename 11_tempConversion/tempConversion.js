const convertToCelsius = function(num) {
  let sum = (num - 32) / 1.8;
  let result = Math.round(sum * 10) / 10
  return result;
};

const convertToFahrenheit = function(num) {
  let sum = (num * 1.8) + 32;
  let result = Math.round(sum * 10) / 10
  return result;
    
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
