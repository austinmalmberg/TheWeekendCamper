const express = require('express');
const router = express.Router();

const site = require('../scripts/pages');
const brand = require('../scripts/brand');

const scraper = require('../scripts/tagscraper');

router.get('/', function(req, res, next) {

  res.render('htmltags', {
    'brand': brand,
    pageTitle: 'Everything HTML',
    navigation: site.getNavigation(),
    'pages': site.pages
  });
});

router.post('/', function(req, res, next) {
  res.send('post request');
  // res.render('everything_html', siteParams);
});

router.put('/', function(req, res, next) {
  res.send('put request');
  // res.render('everything_html', siteParams);
});

router.delete('/', function(req, res, next) {
  res.send('delete request');
  // res.render('everything_html', siteParams);
});

module.exports = router;
