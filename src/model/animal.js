class Animal {
    name;

    constructor(name) {
        this.name = name
    }
    isMatching(pattern){
        const regex = new RegExp(pattern)
        return regex.test(this.name);
    }

}

module.exports = Animal
