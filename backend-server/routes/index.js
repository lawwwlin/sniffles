var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Backend' });
});

router.get('/appointments', function(req, res, next) {
  res.render('routeTemplate', { title: 'apptment backend' });
});

module.exports = router;
