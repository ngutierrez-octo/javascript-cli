class People {
    constructor(name, animals) {
        this.name = name;
        this.animals = animals;
    }

    filterAnimals(pattern) {
        return this.animals;
    }
}

module.exports = People