const Country = require('./country');
const expect = require("expect").expect;

describe('Country without peoples', () => {
    let france = new Country({"name":'France', "people":[]})

    it('shouldGetNoPeople_whenNoPeopleInTheCountry', () => {
        //when
        france.filterAnimals('d')
        //then
        expect(france.peoples).toEqual([]);
    });

});

describe('Country with peoples', () => {

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

    beforeEach(() => {
        france = new Country({"name":'France', "people":[bob, jack]})
    });


    it('shouldGetNoPeople_whenNoPeopleHasAnimalsMatchingTheFilter', () => {
        //when
        france.filterAnimals('d')
        //then
        expect(france.peoples).toEqual([]);
    });
    it('shouldGetBob_whenOnlyBobHasAnimalsMatchingTheFilter', () => {
        //when
        france.filterAnimals('abc')
        //then
        expect(france.peoples).toEqual([bob]);
    });
    it('shouldHaveInfoAboutBob_whenBobHasAnAnimalMatchingThePattern', () => {
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

        expect(france).toEqual(resultExpected);

    });
});