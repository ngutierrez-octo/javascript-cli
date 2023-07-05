const Countries = require('./countries');
const expect = require('expect').expect;

describe('Countries', () =>{

    const france = {
        'name': 'France',
        'people': [{
            'name':'Bob',
            'animals':[
                {
                    'name':'cabc'
                }
            ]
        }]
    }

    const spain = {
        'name': 'Spain',
        'people': [{
            'name':'Franck',
            'animals':[
                {
                    'name':'acb'
                }
            ]
        }]
    }

    let countries = new Countries([france, spain]);


    it('shouldHaveInfoAboutFrance_whenFranceHasAnimalsMatchingThePattern', () => {
        //when
        countries.filterAnimals('cab')
        //then
        const resultExpected = [{
            'name': 'France',
            'peoples': [{
                'name':'Bob',
                'animals':[
                    {
                        'name':'cabc'
                    }
                ]
            }]
        }]

        expect(countries.toJson()).toEqual(resultExpected);

    });

    it('shouldGetCountriesWithPeopleCounts', () => {
        //when
        countries.countPeoples();
        //then
        expect (countries.countries.every(country => country.name.endsWith("[1]"))).toBeTruthy()
    });

});