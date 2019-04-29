const fetch = require('node-fetch');
const html2json = require('html2json').html2json;

const url = 'https://www.w3schools.com/tags/';

class Tag {
  constructor(tag, description, path, examplePath) {

  }
}

/* final output will look like the following
[
  tag: {
    tag: '<a>',
    path: 'tag_a.asp',
    description: 'Defines a hyperlink',
    example-path: 'tryit.asp?filename=tryhtml_link_test'
  },
  ...
]
*/

function getTagData() {
  const data = require('../test/data');
  return data;
}

function parseTableHtml(rawHtml) {
  const searchTerm = '<table class="w3-table-all notranslate">';
  const endTerm = '</table>';
  const beginParse = rawHtml.indexOf(searchTerm);
  const endParse = rawHtml.indexOf(endTerm, beginParse) + endTerm.length + 1;

  return rawHtml.slice(beginParse, endParse);
}

// init database
function initDb() {
  if(!db) {
    const tags = scrapeTagData();
  }
}

module.exports = { getTagData, initDb };
