import { definePrime } from "../../../utils/17.5/definePrime";

describe('test for definePrime function', () => {
    const simple = 17
    const complex = 18

    it('should operate correctly with simple, complex and invalid number', () => {
        expect(definePrime(simple)).toBe(`Число ${simple} - простое число`)
        expect(definePrime(complex)).toBe(`Число ${complex} - составное число`)
        expect(definePrime(1001)).toBe('Данные неверны')
    })
})