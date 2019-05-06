const fetch = require('node-fetch');
const html2json = require('html2json').html2json;

const url = 'https://www.w3schools.com/tags/';
const tagHtmlStart = '<div class="notranslate">';
const tagHtmlEnd = '</div>';

const exampleHtmlStart = '<div class="w3-example">';
const definitionHtmlStart = '<h2>Definition and Usage</h2>';
const exampleHtmlEnd = '<h2>Browser Support</h2>';

const lt = '&lt;';
const gt = '&gt;';

function scrapeTags() {

  console.log(`Beginning scrape from ${url}...`);
  return fetch(url)
    .then(response => response.text())
    .then(parseTagContainer)
    .then(getAsJSON)
    .then(formatData)
    .then(appendDefinitions)
    .catch(err => {});
}

function appendDefinitions(tagObjArray) {
  const pending = [];

  for(let tagObj of tagObjArray) {

    const promise = scrapeDescription(tagObj.path)
      .then(rawDescription => {
        // change url path to w3schools
        tagObj.description = rawDescription.replace(/href="/g, `href="${url}`);

        return tagObj;
      }).catch(err => tagObj);

    pending.push(promise);
  }

  return Promise.all(pending);
}

function scrapeDescription(url) {

  console.log(`Scraping description from ${url}...`);
  return fetch(url)
    .then(response => response.text())
    .then(parseDefinition)
    .catch(err => "");
}

function parseDefinition(rawHtml) {
  const startIndex = rawHtml.indexOf(definitionHtmlStart) + definitionHtmlStart.length;
  const endIndex = rawHtml.indexOf('<h2>', startIndex);

  return rawHtml.slice(startIndex, endIndex).trim();
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

        const obj = {
          tag_name: a.child[0].text.replace(lt, '<').replace(gt, '>'),
          path: `${url}${a.attr.href}`
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

module.exports = { scrapeTags };
