
/**
 * Module dependencies.
 */

var Express = require('express');
var Exphbs  = require('express3-handlebars');
var Http = require('http');
var Path = require('path');
//var ExpressValidator = require('express-validator');
var Routes = require('./routes');
var env = require('node-env-file');
env('.env');

var app = Express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(Express.favicon());
app.use(app.router);

app.get('/', function(req, res) {
	res.writeHeader(200, {
          "Content-Type": "text/html"
      });

      res.write('<!DOCTYPE html><html><head><title>Passbee Transaction</title></head><body style="background: #f1f1f1">');
      res.write("<div style='width: 666px;background: #f1f1f1;margin: auto;padding-bottom: 30px;font-size: 13px;font-family: arial;line-height: 18px;'><div style='margin: 20px 54px;text-align:center;color: maroon;'>Barcode Type and Barcode number is missing</div></div>");
      res.end('</body></html>');
      res.end();
      return;
});

// generate barcode
app.get('/:type/:text/:scaleX?/:scaleY?', Routes.barcode);

Http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  console.log('Node env: ' + process.env.NODE_ENV);
});

