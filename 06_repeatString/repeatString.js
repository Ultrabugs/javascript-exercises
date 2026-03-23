const repeatString = function(string, num) {
    if(num == null || num < 0) {
        return 'ERROR';
    }

    let value = '';
    for(let x = 0; x < num; x++) {
        value += string;
         
    }

    return value;
};

repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
