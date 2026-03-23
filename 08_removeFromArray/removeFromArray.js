const removeFromArray = function(arr, ...search) {

    let newArr = [];
    console.log(search);
    for(let x = 0; x < arr.length; x++){
        if(!search.includes(arr[x])) {
            newArr.push(arr[x]);
        }
    }
    //console.log(newArr);
    return newArr;
};


// Do not edit below this line
module.exports = removeFromArray;
// 01, 02, 03, 04, 05, 


 