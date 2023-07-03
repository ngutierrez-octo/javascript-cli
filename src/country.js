const People = require("./people");

class Country {
    constructor(country) {
        this.name = country.name;
        this.peoples = country.people.map(people => new People(people));

    }

    getCountryWithAnimalsFiltered(pattern) {
        let peoples = this.peoples
            .map(people => people.getPeopleWithAnimalsFiltered(pattern))
            .filter(people => people)
        if (peoples.length)
            return {
                "name": this.name,
                "people": peoples
            }
        return null

    }
}

module.exports = Country