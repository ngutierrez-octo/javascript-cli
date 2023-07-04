class People {
    constructor(people) {

        this.name = people.name;
        this.animals = people.animals.map(animal => animal.name);
    }

    filterAnimals(pattern) {
        const regex = new RegExp(pattern)
        return this.animals.filter(animal => regex.test(animal));
    }

    getPeopleWithAnimalsFiltered(pattern){
        let animals = this.filterAnimals(pattern).map(animal => ({ name: animal }))

        if (animals.length)
            return {
                "name": this.name,
                "animals": animals
            }
        return null



    }
}

module.exports = People