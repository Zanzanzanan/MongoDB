var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/employees');  // Redirects home to employees page
});

module.exports = router;
