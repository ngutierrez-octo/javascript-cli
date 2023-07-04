const Country = require("./country");

class Countries{
    countries;
    constructor(countries) {
         this.countries = countries.map(country => new Country(country));
    }
    filterAnimals(pattern) {
        this.countries.forEach(country => country.filterAnimals(pattern))
        this.countries = this.countries.filter(country=> country.hasPeople())
    }

    toJson(){
        return JSON.parse(JSON.stringify(this.countries))
    }
}

module.exports = Countries