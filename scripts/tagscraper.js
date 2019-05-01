const fs = require('fs');
const fetch = require('node-fetch');
const html2json = require('html2json').html2json;

const url = 'https://www.w3schools.com/tags/';
const tagHtmlStart = '<div class="notranslate">';
const tagHtmlEnd = '</div>';

const exampleHtmlStart = '<div class="w3-example">';
const definitionHtmlStart = '<h2>Definition and Usage</h2>';
const exampleHtmlEnd = '<h2>Browser Support</h2>';

const filename = 'data/HTMLtags.json';

function writeTagsToFile() {

  console.log(`Beginning scrape from ${url}...`);
  fetch(url)
    .then(response => response.text())
    .then(parseTagContainer)
    .then(getAsJSON)
    .then(formatData)
    .then(writeData)
    .catch((err) => console.log(err));

    return true;
}

function parseTagContainer(rawHtml) {

  const startIndex = rawHtml.indexOf(tagHtmlStart) + tagHtmlStart.length;
  const endIndex = rawHtml.indexOf(tagHtmlEnd, startIndex);

  return rawHtml.slice(startIndex, endIndex).trim();
}

function getAsJSON(rawHtml) {
  return html2json(rawHtml).child;
}

function formatData(json) {

  return json.filter(element => element.tag === 'a') // get only anchor tags
      .reduce((tags, a, index) => { // convert tag and path into an object
        const p = url + a.attr.href;

        const obj = {
          tag: a.child[0].text,
          path: p
        }

        tags.push(obj);

        return tags;
      }, []);
}

function parseExampleDescription(rawHtml) {
  const startIndex = rawHtml.indexOf(exampleHtmlStart);
  const defIndex = rawHtml.indexOf(definitionHtmlStart);
  const endIndex = rawHtml.indexOf(exampleHtmlEnd, defIndex) + 1;

  return rawHtml.slice(startIndex, endIndex).trim();
}

function writeData(content) {

  fs.writeFile(filename, JSON.stringify(content, null, 4), 'utf8', (err) => {
    if(err) throw err;

    console.log(`Tags written to ${filename}.`)
  });
}

// write file if the file doesn't exist or 30 minutes have elapsed
if(!fs.existsSync(filename)) {
  writeTagsToFile(filename);
}

module.exports = writeTagsToFile;
