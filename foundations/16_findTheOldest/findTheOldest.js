const findTheOldest = function(people) {

    const age = function(p){
        if (p.yearOfDeath ){
            return p.yearOfDeath - p.yearOfBirth
        }
        else{
            return new Date().getFullYear() - p.yearOfBirth
        }
    }

    return people.reduce( (oldest, person) => {
        if (age(oldest) > age(person)  ) { return oldest}
        else { return person }

    }
 )

};

// Do not edit below this line
module.exports = findTheOldest;
