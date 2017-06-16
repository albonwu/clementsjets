var express = require('express');
var app = express();
var routes = require('./routes/routes');
routes(app);

app.set('port', (process.env.PORT || 3000));

// view engine setup
app.set('views', 'app/templates');
app.set('view engine', 'pug');

app.use('/dist', express.static(__dirname + '/dist'));

app.use(function(req, res, next) {
	res.status(400);
	res.send('<a href="."><img src="dist/imgs/404.png" style="width:90vw"></a>');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});