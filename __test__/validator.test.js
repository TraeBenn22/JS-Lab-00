'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out
  const testObject = {
    str: "yes",
    num: 1,
    arr: ['a'],
    obj: {x: 'y'},
    func: () => {},
    bool: false
  };

  it('strings', () => {
    expect(validator.isString(testObject.str)).toBeTruthy();
    expect(validator.isString(testObject.num)).toBeFalsy();
    expect(validator.isString(testObject.arr)).toBeFalsy();
    expect(validator.isString(testObject.obj)).toBeFalsy();
    expect(validator.isString(testObject.func)).toBeFalsy();
    expect(validator.isString(testObject.bool)).toBeFalsy();
  });

  it('numbers', () => {
    expect(validator.isNumber(testObject.str)).toBeFalsy();
    expect(validator.isNumber(testObject.num)).toBeTruthy();
    expect(validator.isNumber(testObject.arr)).toBeFalsy();
    expect(validator.isNumber(testObject.obj)).toBeFalsy();
    expect(validator.isNumber(testObject.func)).toBeFalsy();
    expect(validator.isNumber(testObject.bool)).toBeFalsy();
  });

  it('arrays', () => {
    expect(validator.isArray(testObject.str)).toBeFalsy();
    expect(validator.isArray(testObject.num)).toBeFalsy();
    expect(validator.isArray(testObject.arr)).toBeTruthy();
    expect(validator.isArray(testObject.obj)).toBeFalsy();
    expect(validator.isArray(testObject.func)).toBeFalsy();
    expect(validator.isArray(testObject.bool)).toBeFalsy();
  });

  it('objects', () => {
    expect(validator.isObject(testObject.str)).toBeFalsy();
    expect(validator.isObject(testObject.num)).toBeFalsy();
    expect(validator.isObject(testObject.arr)).toBeFalsy();
    expect(validator.isObject(testObject.obj)).toBeTruthy();
    expect(validator.isObject(testObject.func)).toBeFalsy();
    expect(validator.isObject(testObject.bool)).toBeFalsy();
  });

  it('functions', () => {
    expect(validator.isFunction(testObject.str)).toBeFalsy();
    expect(validator.isFunction(testObject.num)).toBeFalsy();
    expect(validator.isFunction(testObject.arr)).toBeFalsy();
    expect(validator.isFunction(testObject.obj)).toBeFalsy();
    expect(validator.isFunction(testObject.func)).toBeTruthy();
    expect(validator.isFunction(testObject.bool)).toBeFalsy();
  });

  it('booleans', () => {
    expect(validator.isBoolean(testObject.str)).toBeFalsy();
    expect(validator.isBoolean(testObject.num)).toBeFalsy();
    expect(validator.isBoolean(testObject.arr)).toBeFalsy();
    expect(validator.isBoolean(testObject.obj)).toBeFalsy();
    expect(validator.isBoolean(testObject.func)).toBeFalsy();
    expect(validator.isBoolean(testObject.bool)).toBeTruthy();
  });
});

describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(true).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(true).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(true).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(true).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});