const { assert, should } = require('chai');
const arrays = require('../Array.js');

describe('arrays methods', () => {

    describe('serthMinElement', () => {

        
        it('should is defined', () => {
            assert.isDefined(arrays.serthMinElement);
        });
        it('should return не являеться массивом',() =>{
            const arg = 1;
            const expected = 'аргумент не являеться массивом';
            const actual = arrays.serthMinElement(arg);
        });
        it('should return min element 1', () => {
            const arg = [9, 8, 5, 1, 4, 6];
            const expected = 1;
            const actual = arrays.serthMinElement(arg);
            assert.deepEqual(actual, expected);
        });
        it('should return min element -5', () => {
            const arg = [1, 2, -5];
            const expected = -5;
            const actual = arrays.serthMinElement(arg);
            assert.deepEqual(actual, expected);
        });
        it('should return min element []', () => {
            const arg = [];
            const expected = undefined;
            const actual = arrays.serthMinElement(arg);
            assert.deepEqual(actual, expected);
        });
    });

    describe('serthMaxElement', () => {

        it('should is defined', () => {
            assert.isDefined(arrays.serthMaxElement);
        });
    })
});
