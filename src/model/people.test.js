const People = require('./people');
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
        //when
        bob.filterAnimals('abc');
        //then
        const expectedAnimals = []
        expect.expect(bob.animals).toEqual(expectedAnimals);
    });

});
describe('People with animals', function () {

    const animals = [{'name': 'abc'}, {'name':'bca'}, {'name':'cba'}, {'name':'bac'}, {'name':'cab'}];
    let bob;

    beforeEach(function () {
        bob = new People({"name":"Bob", "animals":animals});
    });

    it('shouldGetAllAnimals_whenBobHasAllAnimalsMatchingThePattern', function () {
        //when
        bob.filterAnimals('a')
        //then
        const expectedAnimals = animals
        expect.expect(bob.animals).toEqual(expectedAnimals);
    });
    it('shouldGetOnlyAnimalsMatchingThePattern_whenBobHasAnimalsMatchingThePattern', function () {
        //when
        bob.filterAnimals('ab')
        //then
        const expectedAnimals = [{'name': 'abc'}, {'name':'cab'}];
        expect.expect(bob.animals).toEqual(expectedAnimals);
    });
    it('shouldGetNoAnimals_whenBobHasNoAnimalsMatchingThePattern', function () {
        //when
        bob.filterAnimals('d')
        //then
        const expectedAnimals = [];
        expect.expect(bob.animals).toEqual(expectedAnimals);
    });
    it('shouldHaveInfoAboutBob_whenBobAnimalsMatchingThePattern', function () {

        //when
        bob.filterAnimals('abc')
        //then
        const resultExpected = {
            "name":"Bob",
            "animals":[
                {
                    "name":"abc"
                }
            ]
        }
        expect.expect(bob).toEqual(resultExpected);

    });

});
