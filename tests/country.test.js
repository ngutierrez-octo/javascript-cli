const Country = require('../src/country');
const expect = require("expect");
const People = require("../src/people");

describe('Country without peoples', function () {
    let france = new Country({"name":'France', "people":[]})

    it('shouldGetNoPeople_whenNoPeopleInTheCountry', function () {
        expect.expect(france.getCountryWithAnimalsFiltered('d')).toEqual(null);
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
        expect.expect(france.getCountryWithAnimalsFiltered('d')).toEqual(null);
    });
    it('shouldGetBob_whenOnlyBobHasAnimalsMatchingTheFilter', function () {
        expect.expect(france.getCountryWithAnimalsFiltered('abc').people).toEqual([bob]);
    });
    it('shouldHaveInfoAboutBob_whenBobHasAnAnimalMatchingThePattern', function () {

        const resultExpected = {
            "name": "France",
            "people": [{
                "name":"Bob",
                "animals":[
                    {
                        "name":"cabc"
                    }
                ]
            }]
        }

        expect.expect(france.getCountryWithAnimalsFiltered('cab')).toEqual(resultExpected);

    });



});