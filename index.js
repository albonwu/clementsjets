var express = require('express');
var app = express();
var routes = require('./routes/routes');
var favicon = require('serve-favicon');
routes(app);

app.set('port', (process.env.PORT || 3000));

// view engine setup
app.set('views', 'app/templates');
app.set('view engine', 'pug');

app.use('/dist', express.static(__dirname + '/dist'));

app.use(favicon(__dirname + '/favicon.ico'));

app.use(function(req, res, next) {
	res.status(400);
	res.send(
		'<a href=".."><img style="max-width:100vw;max-height:100vh" src="./dist/imgs/404/' +
		Math.ceil(9 * Math.random()) +
		'.jpg" style="width:90vw"></a>'
	);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});