const People = require("./people");

class Country {
    constructor(country) {
        this.name = country.name;
        this.peoples = country.people.map(people => new People(people));
    }

    hasPeople(){
        return this.peoples.length > 0;
    }

    filterAnimals(pattern) {
        this.peoples.forEach(people => people.filterAnimals(pattern));
        this.peoples = this.peoples.filter(people => people.hasAnimals());
    }

}

module.exports = Country