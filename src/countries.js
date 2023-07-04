const Country = require("./country");

class Countries{
    constructor(countries) {
         this.countries = countries.map(country => new Country(country));
    }
    filterByAnimals(pattern) {
        return this.countries.map(country => country.getCountryWithAnimalsFiltered(pattern))
            .filter(country => country)
    }
}

module.exports = Countries