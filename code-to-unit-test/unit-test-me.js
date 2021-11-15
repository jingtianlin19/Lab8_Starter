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
    test('test email',() => {
        expect(functions.isEmail('test@gmail.com')).toBe(true);
    })

    test('test email',() => {
        expect(functions.isEmail('test@ucsd.edu')).toBe(true);
    })

    test('test email',() => {
        expect(functions.isEmail('test@.ocm')).toBe(false);
    })

    test('test email',() => {
        expect(functions.isEmail('@@@@@@')).toBe(false);
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
        expect(functions.isStrongPassword('12345678')).toBe(false);
    })

    test('test password',() => {
        expect(functions.isStrongPassword('111111111')).toBe(false);
    })
})


module.exports = { isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor };

// matches valid phone numbers
function isPhoneNumber(phoneNumber) {
  const phoneRegex = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;
  return phoneRegex.test(phoneNumber);
}

// matches valid emails
function isEmail(email) {
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailRegex.test(email);
}

/**
 * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
 */
function isStrongPassword(password) {
  const pwRegex = /^[a-zA-Z]\w{3,14}$/;
  return pwRegex.test(password);
}

// 	This regular expressions matches dates of the form XX / XX / YYYY where 
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.
function isDate(date) {
  const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  return dateRegex.test(date);
}

// Matches valid 3 or 6 character hex codes used for HTML or CSS.
function isHexColor(color) {
  const colorRegex = /^\#?[A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?$/;
  return colorRegex.test(color);
}