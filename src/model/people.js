const Animal = require("./animal");

class People {
    constructor(people) {
        this.name = people.name;
        this.animals = people.animals.map(animal => new Animal(animal.name));
    }
    hasAnimals(){
        return this.animals.length >0;
    }
    filterAnimals(pattern) {
        this.animals = this.animals.filter(animal => animal.isMatching(pattern));
    }

}

module.exports = People