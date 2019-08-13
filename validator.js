'use strict';

// Vinicio - this is similar to module.exports = {};, but you are giving it an easier to use name
let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */


// Ideas for rules : Positive values / Negative values / odd values / even values /
// specific values / bigger than five /

// if you need to setup more complex rules, remember that rules can be an object too

validator.isValid = (input, rules) => {
  // return true;
  if(rules === 'object') {
    // Vinicio - how do I check if the type of the input is an object
    return typeof input === 'object';
  }

  if(rules === 'object') {
    // I'm checking if the value is less than zero, because the user wants to
    // check if the value is negative
    return typeof input < 0;
  }

  if(rules === 'one') {
    // I'm checking if the value is less than zero, because the user wants to
    // check if the value is negative
    return input === 1;
  }

};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

validator.isNumber = (input) => {
    return typeof input === 'number';
};

validator.isArray = (input) => {
    return typeof input === 'array';
};

validator.isObject = (input) => {
    return typeof input === 'object';
};

validator.isFunction = (input) => {
    return typeof input === 'function';
};

validator.isBoolean = (input) => {
    return typeof input === 'boolean';
};

validator.allElementsAreOfType = (list, type) => {
  for(const item of list) {
    if (typeof item !== type)
      return false;
  }

  return true;
}

