var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , test:'ciao',number:45, username:'nome_utente_random', link:'/test'});
});
//aggiungo una route per far riferimento alla nuova pagina test.pug
router.get('/test', function(req, res, next) {
  res.render('test');
});

module.exports = router;
