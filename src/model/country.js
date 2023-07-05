const People = require('./people');

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

    countPeoples() {
        this.name = this.name.concat(' [', this.peoples.length, ']')
        this.peoples.forEach(people => people.countAnimals())
    }
}

module.exports = Country