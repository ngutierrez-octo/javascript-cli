const Country = require('./country');
const expect = require("expect");
const People = require("./people");

describe('Country without peoples', function () {
    let france = new Country({"name":'France', "people":[]})

    it('shouldGetNoPeople_whenNoPeopleInTheCountry', function () {
        //when
        france.filterAnimals('d')
        //then
        expect.expect(france.peoples).toEqual([]);
    });

});

describe('Country with peoples', function () {

    const bob = {
        "name":"Bob",
        "animals":[
            {
                "name":"abc"
            },
            {
                "name":"cabc"
            }
        ]
    };
    const jack = {
        "name":"Jack",
        "animals":[
            {
                "name":"bca"
            }
        ]
    };
    let france;

    beforeEach(function () {
        france = new Country({"name":'France', "people":[bob, jack]})
    });


    it('shouldGetNoPeople_whenNoPeopleHasAnimalsMatchingTheFilter', function () {
        //when
        france.filterAnimals('d')
        //then
        expect.expect(france.peoples).toEqual([]);
    });
    it('shouldGetBob_whenOnlyBobHasAnimalsMatchingTheFilter', function () {
        //when
        france.filterAnimals('abc')
        //then
        expect.expect(france.peoples).toEqual([bob]);
    });
    it('shouldHaveInfoAboutBob_whenBobHasAnAnimalMatchingThePattern', function () {
        //when
        france.filterAnimals('cab')
        //then
        const resultExpected = {
            "name": "France",
            "peoples": [{
                "name":"Bob",
                "animals":[
                    {
                        "name":"cabc"
                    }
                ]
            }]
        }

        expect.expect(france).toEqual(resultExpected);

    });



});