const Countries = require('../src/countries');
const expect = require("expect");

describe('Countries', function () {

    const france = {
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

    const spain = {
        "name": "Spain",
        "people": [{
            "name":"Franck",
            "animals":[
                {
                    "name":"acb"
                }
            ]
        }]
    }

    let countries = new Countries([france, spain]);


    it('shouldHaveInfoAboutFrance_whenFranceHasAnimalsMatchingThePattern', function () {

        const resultExpected = [{
            "name": "France",
            "people": [{
                "name":"Bob",
                "animals":[
                    {
                        "name":"cabc"
                    }
                ]
            }]
        }]

        expect.expect(countries.filterByAnimals('cab')).toEqual(resultExpected);

    });



});