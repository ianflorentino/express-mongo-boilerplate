var express = require('express');

var appController = require('./controllers/app-controller');

var router = express.Router();

router.route('/')
  .get(appController.index);

module.exports = router;
