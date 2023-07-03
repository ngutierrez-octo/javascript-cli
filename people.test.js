const People = require('./people');
const expect = require("expect");

/* Test List
* should return an empty list when no animals match the pattern
* should return all the animals matching a specific pattern
* should return people with his animals matching the pattern in a good format
*
* */

describe('People', function () {


    it('shouldGetNoAnimals_whenBobHasNoAnimals', function () {
        const bob = new People('Bob', []);
        expect.expect(bob.filterAnimals('toto')).toEqual([]);
    });
    it('shouldGetAllAnimals_whenBobHasAllAnimalsMatchingThePattern', function () {
        const bob = new People('Bob', ['toto', 'ototoo','ototoo']);
        expect.expect(bob.filterAnimals('toto')).toEqual(['toto', 'ototoo','ototoo']);
    });
    it('shouldGetOnlyAnimalsMatchingThePattern_whenBobHasAnimalsMatchingThePattern', function () {
        const bob = new People('Bob', ['toto', 'ototoo','otooo']);
        expect.expect(bob.filterAnimals('toto')).toEqual(['toto', 'ototoo']);
    });
    it('shouldGetNoAnimals_whenBobHasNoAnimalsMatchingThePattern', function () {
        const bob = new People('Bob', ['tot', 'otoo','otooo']);
        expect.expect(bob.filterAnimals('toto')).toEqual([]);
    });

});
