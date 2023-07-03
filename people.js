class People {
    constructor(name, animals) {
        this.name = name;
        this.animals = animals;
    }

    filterAnimals(pattern) {
        const regex = new RegExp(pattern)
        return this.animals.filter(animal => regex.test(animal));
    }
}

module.exports = People