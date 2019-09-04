'use strict';

const myFileSystem = require('./edit-file');

function editFile(file) {
  file.firstName = 'fake';
  file.lastName = 'fake';
  return file;
}


myFileSystem.readFilePromises(`${__dirname}/data/person.json`)
  .then(fileString => {
    console.log('Read file with Promises', JSON.parse(fileString));
    return JSON.parse(fileString);
  })
  // edit file
  .then(file => {
    return editFile(file);
  })
  // write file
  .then(editedFile => {
    myFileSystem.writeFilePromises(`${__dirname}/data/person.json`, editedFile);
  })
  // read file again
  .then(result => {
    console.error('result', result);
    return myFileSystem.readFilePromises(`${__dirname}/data/person.json`);
  })
  .then(fileString => {
    console.log('Write file with Promises', JSON.parse(fileString));
  })
  .catch(error => console.error('ERROR-d3kg', error));