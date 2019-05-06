const fs = require('fs');

function writeJsonData(filepath, objArray, callback) {

  fs.writeFile(filepath, JSON.stringify(objArray, null, 4), 'utf8', (err) => {
    if(err) throw err;

    console.log(`Tags written to ${filepath}.`);

    if(callback) callback();
  });
}

module.exports = { writeJsonData };
