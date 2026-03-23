const sumAll = function(a, b) {
     
    if(!Number.isInteger(a)) {
        return 'ERROR';
    }

    if(!Number.isInteger(b)) {
        return 'ERROR';
    }
    // check if a or b is a negative number. or is a non-int value
    if(a < 0 || b < 0) {
        return 'ERROR';
    }

    
    let c = 0;
    if(a > b) {
        c = a;
        a = b
        b = c;
    }
    
    let total = 0;
    let min = a;
    let max = b;
    let arr = [];
    
    for(min; min <= max; min++) {
        arr.push(min);
    }
    
    arr.map((item) => {
        return total += item;
    })
    return total
};

sumAll(2, 4);

// Do not edit below this line
module.exports = sumAll;
