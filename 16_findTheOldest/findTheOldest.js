const findTheOldest = function(people) {
    let newArr = []
    let age
    for (let person of people) {
    if (person.yearOfDeath === undefined) age = 2025-person.yearOfBirth
    else age = person.yearOfDeath - person.yearOfBirth
    newArr.push({
        name:person.name,
        age
    })
    }
    newArr.sort((elementA,elementB)=> elementB.age - elementA.age)
    return newArr[0]

};

// Do not edit below this line
module.exports = findTheOldest;
