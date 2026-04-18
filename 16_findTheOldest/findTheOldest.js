const findTheOldest = function(people) {
    
    // let people = [];
    // arr.map((item) => {
    //     people.push(item.name);
    //     people.push(item.yearOfDeath - item.yearOfBirth)
    // });
    currentYear = (new Date()).getFullYear();
    people.map((item) => {
        if(item.yearOfDeath === undefined) {
            item.yearOfDeath = currentYear;
            people.push(currentYear);
        }
    })

    people.sort((personOne, personTwo) => {
        personOneAge = personOne.yearOfDeath - personOne.yearOfBirth;
        personTwoAge = personTwo.yearOfDeath - personTwo.yearOfBirth;

        return personOneAge > personTwoAge ? -1 : 1;
    });

     
    let oldest = people[0];
    return oldest;
     
    
};

// Do not edit below this line
module.exports = findTheOldest;
