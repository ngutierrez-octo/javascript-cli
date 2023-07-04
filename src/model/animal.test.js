const Animal = require("./animal");
const expect = require("expect").expect;

describe('Animal', () => {

    const pattern = 'er'

    it('shouldMatchPatternWhenAnimalIsJerry', ()=>{
        //Given
        const jerry = new Animal('Jerry')
        //When
        let isMatch = jerry.isMatching(pattern)
        //Then
        expect(isMatch).toEqual(true)
    })
    it('shouldNotMatchPatternWhenAnimalIsGarfield', ()=>{
        //Given
        const jerry = new Animal('Garfield')
        //When
        let isMatch = jerry.isMatching(pattern)
        //Then
        expect(isMatch).toEqual(false)
    })

})