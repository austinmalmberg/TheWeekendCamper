const express = require('express');
const router = express.Router();

const pages = require('../../scripts/pages');

const siteParams = require('../../scripts/brand');
siteParams.navigation = pages.getNavigation();

const everythingHtml = require('../../scripts/everything_html/everything_html');
const data = require('../../test/data');

router.get(pages.urlFor('everything_html'), function(req, res, next) {
  siteParams.pageTitle = 'Everything HTML';
  console.log(data);
  res.render('everything_html', siteParams);
});

module.exports = router;
