const express = require('express');
const router = express.Router();

const brand = require('../content/brand');
const site = require('../content/site');

router.param('name', (req, res, next, id) => {
  if(!req.cookies.name || req.cookies.name != req.body.name) {
    res.cookie('name', req.cookies.name);
    console.log('Name updated to ' + req.cookies.name);
  }

  next();
});

router.get('/', (req, res, next) => {

  const visitorInfo = {};
  if(req.cookies.name) visitorInfo.name = req.cookies.name;

  res.render('feedback', {
    brand: brand,
    site: site,
    page: site.getPage('feedback'),
    visitor_info: visitorInfo
  });
});

router.post('/:name', (req, res, next) => {
  console.log(req);

  req.sendStatus(500);
});

router.put('/', (req, res, next) => {

});

router.delete('/', (req, res, next) => {

});

module.exports = router;
