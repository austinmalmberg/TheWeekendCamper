const express = require('express');
const router = express.Router();

const pages = require('../scripts/pages');

const siteParams = require('../scripts/brand');
siteParams.navigation = pages.getNavigation();

/* GET home page. */
router.get(pages.urlFor('index'), function(req, res, next) {
  siteParams.pageTitle = 'Table of Contents';
  siteParams.pages = pages.pages;

  res.render('index', siteParams);
});

module.exports = router;
