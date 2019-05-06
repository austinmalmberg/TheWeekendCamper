const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

const site = require('../content/site');
const brand = require('../content/brand');
const about = require('../content/about');
const gear = require('../content/gear');

/* GET home page. */
router.get(site.urlFor('index'), (req, res, next) => {

  res.render('index', {
    brand: brand,
    site: site,
    page: site.getPage('index')
  });
});

router.get(site.urlFor('about'), (req, res, next) => {

  res.render('about', {
    brand: brand,
    site: site,
    page: site.getPage('about'),
    about: about
  });
});

router.get(site.urlFor('contract'), (req, res, next) => {
  res.render('contract', {
    brand: brand,
    site: site,
    page: site.getPage('contract')
  });
});

router.get(site.urlFor('gear'), (req, res, next) => {

  res.render('gear', {
    brand: brand,
    site: site,
    page: site.getPage('gear'),
    gear: gear
  });
});

router.get(site.urlFor('compass'), (req, res, next) => {
  res.render('compass', {
    brand: brand,
    site: site,
    page: site.getPage('compass')
  });
});

router.get(site.urlFor('codecademy_port'), (req, res, next) => {
  res.redirect('http://students.cpcc.edu/~amalmbe0/web215/codecademy/');
});

module.exports = router;
