#!/usr/bin/env node 
const fs = require('fs');
const path = require('path');
const args = process.argv;
const inputfile = args[2];
const inputfileName = path.basename(inputfile, '.jaga')
const inputExt = getExtension(inputfile);

if (inputExt !== 'jaga') {
  console.log('the provided file is not a valid jagascript file \nPlease provide a valid ".jaga" file');
  return;
}

fs.createReadStream(inputfile)
  .pipe(fs.createWriteStream(`${inputfileName}.js`));

function getExtension(filename) {
  var ext = path.extname(filename||'').split('.');
  return ext[ext.length - 1];
}
