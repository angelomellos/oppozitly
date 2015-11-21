'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/members', require('./members'));
router.use('/urls', require('./urls'));
router.use('/zitly', require('./zitly'));

router.use(function (req, res) {
    res.status(404).end();
});
