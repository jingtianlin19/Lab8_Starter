// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//test for: isPhoneNumber
describe("tests for isPhoneNumber",() => {
    test('test phone number',() => {
        expect(functions.isPhoneNumber('858-000-1111')).toBe(true);
    })

    test('test phone number',() => {
        expect(functions.isPhoneNumber('(858)-000-2222')).toBe(true);
    })

    test('test phone number',() => {
        expect(functions.isPhoneNumber('858000000')).toBe(false);
    })

    test('test phone number',() => {
        expect(functions.isPhoneNumber('(858)-00-2 ')).toBe(false);
    })
})

//test for: isEmail
describe("tests for isEmail",() => {
    test('test phone number',() => {
        expect(functions.isEmail('test@gmail.com')).toBe(true);
    })

    test('test phone number',() => {
        expect(functions.isEmail('test@ucsd.edu')).toBe(true);
    })

    test('test phone number',() => {
        expect(functions.isEmail('test@gmail.ocm')).toBe(false);
    })

    test('test phone number',() => {
        expect(functions.isEmail('test')).toBe(false);
    })
})
 

//test for: isStrongPassword
describe("tests for isStrongPassword",() => {
    test('test password',() => {
        expect(functions.isStrongPassword('test_1234')).toBe(true);
    })

    test('test password',() => {
        expect(functions.isStrongPassword('I_Am_Strong123')).toBe(true);
    })

    test('test password',() => {
        expect(functions.isStrongPassword('test123')).toBe(false);
    })

    test('test password',() => {
        expect(functions.isStrongPassword('test')).toBe(false);
    })
})


//test for: isDate
describe("tests for isDate",() => {
    test('test date',() => {
        expect(functions.isDate('11/13/2021')).toBe(true);
    })

    test('test date',() => {
        expect(functions.isDate('02/12/2000')).toBe(true);
    })

    test('test date',() => {
        expect(functions.isDate('022/122/20')).toBe(false);
    })

    test('test date',() => {
        expect(functions.isDate('20')).toBe(false);
    })
})

