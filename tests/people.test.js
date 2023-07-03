const People = require('../src/people');
const expect = require("expect");

/* Test List
* should return an empty list when no animals match the pattern
* should return all the animals matching a specific pattern
* should return people with his animals matching the pattern in a good format
*
* */

describe('People without animals', function () {

    const bob = new People({"name":"Bob", "animals":[]});

    it('shouldGetNoAnimals_whenBobHasNoAnimals', function () {
        expect.expect(bob.filterAnimals('abc')).toEqual([]);
    });
    it('shouldHaveNoInfoAboutBob_whenBobHasNoAnimals', function () {
        expect.expect(bob.getPeopleWithAnimalsFiltered('abc')).toEqual(null);
    });

});
describe('People with animals', function () {

    const animals = [{'name': 'abc'}, {'name':'bca'}, {'name':'cba'}, {'name':'bac'}, {'name':'cab'}];
    let bob;

    beforeEach(function () {
        bob = new People({"name":"Bob", "animals":animals});
    });

    it('shouldGetAllAnimals_whenBobHasAllAnimalsMatchingThePattern', function () {
        expect.expect(bob.filterAnimals('a')).toEqual(animals.map(animal => animal.name));
    });
    it('shouldGetOnlyAnimalsMatchingThePattern_whenBobHasAnimalsMatchingThePattern', function () {
        expect.expect(bob.filterAnimals('ab')).toEqual(['abc', 'cab']);
    });
    it('shouldGetNoAnimals_whenBobHasNoAnimalsMatchingThePattern', function () {
        expect.expect(bob.filterAnimals('d')).toEqual([]);
    });
    it('shouldHaveInfoAboutBob_whenBobAnimalsMatchingThePattern', function () {

        const resultExpected = {
            "name":"Bob",
            "animals":[
                {
                    "name":"abc"
                }
            ]
        }

        expect.expect(bob.getPeopleWithAnimalsFiltered('abc')).toEqual(resultExpected);

    });

});
