'use strict';

const fs = require('fs');
const util = require('util');

module.exports = exports = (file, callback) => {
    fs.readFile( file, (error, personFile) => {
        if(error) { callback(error); }
        else { callback(undefined, personFile.toString()); }
    });
};



