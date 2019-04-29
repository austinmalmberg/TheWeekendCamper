const express = require('express');
const router = express.Router();

const brand = require('../scripts/brand');
const pages = require('../scripts/pages');
brand.pageTitle = 'Table of Contents';
brand.navigation = pages.getNavigation();
brand.pages = pages.pages;

/* GET home page. */
router.get(pages.urlFor('index'), function(req, res, next) {
  res.render('index', brand);
});

module.exports = router;
