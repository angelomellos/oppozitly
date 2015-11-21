'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Url = mongoose.model('Url');

router.get('/*' ,function (req, res, next) {
  var fullZitly = 'https://rocky-atoll-2379.herokuapp.com/api/zitly' + req.url;
  console.log('fullzitly===',fullZitly);
  Url.findOne({zitly: fullZitly})
  .then(url => {
    if(url.url.indexOf("http")===-1)
      url.url = "https://" + url.url;
    res.redirect(301, url.url);
  });
});
