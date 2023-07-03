const People = require('./people');
const expect = require("expect");

/* Test List
* should return an empty list when no animals match the pattern
* should return all the animals matching a specific pattern
* should return people with his animals matching the pattern in a good format
*
* */

describe('People without animals', function () {

    it('shouldGetNoAnimals_whenBobHasNoAnimals', function () {
        let bob = new People('Bob', []);
        expect.expect(bob.filterAnimals('abc')).toEqual([]);
    });
});
describe('People with animals', function () {

    const animals = ['abc', 'bca', 'cba', 'bac', 'cab'];
    let bob;

    beforeEach(function () {
        bob = new People('Bob', animals);
    });

    it('shouldGetAllAnimals_whenBobHasAllAnimalsMatchingThePattern', function () {
        expect.expect(bob.filterAnimals('a')).toEqual(animals);
    });
    it('shouldGetOnlyAnimalsMatchingThePattern_whenBobHasAnimalsMatchingThePattern', function () {
        expect.expect(bob.filterAnimals('ab')).toEqual(['abc', 'cab']);
    });
    it('shouldGetNoAnimals_whenBobHasNoAnimalsMatchingThePattern', function () {
        expect.expect(bob.filterAnimals('d')).toEqual([]);
    });

});
