'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Url = mongoose.model('Url');

router.post('/', function (req, res, next) {
  Url.create({url: req.body.url})
  .then((url) => {
    res.json(url);
  });
});

router.get('/', function(req, res, next) {
  Url.find().limit(10)
  .then(urls => res.json(urls));
});
