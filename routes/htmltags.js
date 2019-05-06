const express = require('express');
const router = express.Router();

const fs = require('fs');

const site = require('../content/site');
const brand = require('../content/brand');

const grabber = require('../scripts/taggrabber');
let tags;

const writeToFile = require('../scripts/writeData');
const filePath = 'data/HTMLtags.json';

// reads tag data from json file
// if the tag data doesn't exist, scrapes it from w3schools then writes it to file
const retrieveTagData = (req, res, next) => {

  if(fs.existsSync(filePath)) {

    tags = require('../' + filePath);
    next();

  } else {

    grabber.scrapeTags().then(jsonData => {
      tags = jsonData;
      next();
      writeToFile.writeJsonData(filePath, jsonData);
    });

  }
}

router.get('/', retrieveTagData, (req, res, next) => {

  res.render('htmltags', {
    brand: brand,
    site: site,
    page: site.getPage('htmltags'),
    tags: tags
  });
});

module.exports = router;
