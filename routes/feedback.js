const express = require('express');
const router = express.Router();

const brand = require('../content/brand');
const site = require('../content/site');

router.get('/', (req, res, next) => {

  res.render('feedback', {
    brand: brand,
    site: site,
    page: site.getPage('feedback')
  });
});

router.post('/', (req, res, next) => {

});

router.put('/', (req, res, next) => {

});

router.delete('/', (req, res, next) => {

});

module.exports = router;
