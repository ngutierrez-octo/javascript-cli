const People = require('./people');
const expect = require("expect");

/* Test List
* should return an empty list when no animals match the pattern
* should return all the animals matching a specific pattern
* should return people with his animals matching the pattern in a good format
*
* */

describe('People without animals', () => {

    const bob = new People({"name":"Bob", "animals":[]});

    it('shouldGetNoAnimals_whenBobHasNoAnimals', () => {
        //when
        bob.filterAnimals('abc');
        //then
        const expectedAnimals = []
        expect.expect(bob.animals).toEqual(expectedAnimals);
    });

});
describe('People with animals', () => {

    const animals = [{'name': 'abc'}, {'name':'bca'}, {'name':'cba'}, {'name':'bac'}, {'name':'cab'}];
    let bob;

    beforeEach(() => {
        bob = new People({"name":"Bob", "animals":animals});
    });

    it('shouldGetAllAnimals_whenBobHasAllAnimalsMatchingThePattern', () => {
        //when
        bob.filterAnimals('a')
        //then
        expect.expect(bob.animals).toEqual(animals);
    });
    it('shouldGetOnlyAnimalsMatchingThePattern_whenBobHasAnimalsMatchingThePattern', () => {
        //when
        bob.filterAnimals('ab')
        //then
        const expectedAnimals = [{'name': 'abc'}, {'name':'cab'}];
        expect.expect(bob.animals).toEqual(expectedAnimals);
    });
    it('shouldGetNoAnimals_whenBobHasNoAnimalsMatchingThePattern', () => {
        //when
        bob.filterAnimals('d')
        //then
        const expectedAnimals = [];
        expect.expect(bob.animals).toEqual(expectedAnimals);
    });
    it('shouldHaveInfoAboutBob_whenBobAnimalsMatchingThePattern', () => {

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
