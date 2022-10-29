import {romanNumbers} from './romanNumerals'

describe('Testing roman numerals conversion', () => {
    it('should return empty string if 0', () => {
        expect(romanNumbers(0)).toBe('')
    })

    it('should return I with 1', function () {
        expect(romanNumbers(1)).toBe('I')
    });

    it('should return II with 3', function () {
        expect(romanNumbers(3)).toBe('III')
    });

    it('should return IV with 4', function () {
        expect(romanNumbers(4)).toBe('IV')
    });

    it('should return V with 5', function () {
        expect(romanNumbers(5)).toBe('V')
    });

    it('should return VIII with 8', function () {
        expect(romanNumbers(8)).toBe('VIII')
    });

    it('should return IX with 9', function () {
        expect(romanNumbers(9)).toBe('IX')
    });

    it('should return X with 10', function () {
        expect(romanNumbers(10)).toBe('X')
    });

    it('should return XIII with 13', function () {
        expect(romanNumbers(13)).toBe('XIII')
    });

    it('should return IV with 14', function () {
        expect(romanNumbers(14)).toBe("XIV")
    });


    it('should return V with 15', function () {
        expect(romanNumbers(15)).toBe('XV')
    });

    it('should return VIII with 18', function () {
        expect(romanNumbers(18)).toBe('XVIII')
    });

    it('should return IX with 19', function () {
        expect(romanNumbers(19)).toBe('XIX')
    });

    it('should return X with 20', function () {
        expect(romanNumbers(20)).toBe('XX')
    });

    it('should return XIII with 23', function () {
        expect(romanNumbers(23)).toBe('XXIII')
    });

    it('should return XXXIX with 39', function () {
        expect(romanNumbers(39)).toBe('XXXIX')
    });

    it('should return CXXII with 122', function () {
        expect(romanNumbers(122)).toBe('CXXII')
    });

    it('should return MCMXCIX with 1999', function () {
        expect(romanNumbers(1999)).toBe('MCMXCIX')
    });

    it('should return MMMMCMXCIX with 4999', function () {
        expect(romanNumbers(4999)).toBe('MMMMCMXCIX')
    });

})
