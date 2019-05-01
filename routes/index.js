const express = require('express');
const router = express.Router();

const site = require('../scripts/pages');
const brand = require('../scripts/brand');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
    brand: brand,
    pageTitle: 'Table of Contents',
    navigation: site.getNavigation(),
    'pages': site.pages
  });
});

module.exports = router;
