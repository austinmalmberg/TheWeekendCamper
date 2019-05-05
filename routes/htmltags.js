const express = require('express');
const router = express.Router();

const site = require('../content/site');
const brand = require('../content/brand');

const scraper = require('../scripts/tagscraper');

router.get('/', (req, res, next) => {

  res.render('htmltags', {
    brand: brand,
    site: site,
    page: site.getPage('htmltags')
  });
});

router.post('/', (req, res, next) => {
  res.send('post request');
});

router.put('/', (req, res, next) => {
  res.send('put request');
});

router.delete('/', (req, res, next) => {
  res.send('delete request');
});

module.exports = router;
