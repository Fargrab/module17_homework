import {getPercents} from "../../../../utils/17.6/17.6.2/getPercents";

describe('test for getPercent function', () => {
    const validPercent = 30
    const validNumber = 200
    const invalidPercent = 250
    const invalidNumber = 0
    const stringPercent = 'Percent'
    const stringNumber = 'Number'

    it('should operate correctly with string percent, string number,invalid percent, invalid number, percent and number', () =>{
        expect(getPercents(stringPercent, validNumber)).toBe(`Значение процента - ${stringPercent} не корректное. Не является числом`)
        expect(getPercents(invalidPercent, validNumber)).toBe(`Значение процента - ${invalidPercent} не корректное. Может быть только больше 0 и меньшим или равным 100`)
        expect(getPercents(validPercent, stringNumber)).toBe(`Значение числа - ${stringNumber} не корректное. Не является числом`)
        expect(getPercents(validPercent, invalidNumber)).toBe(`Значение числа - ${invalidNumber} не корректное.  Может быть только больше 0`)
        expect(getPercents(validPercent, validNumber)).toBe(60)
    })
})