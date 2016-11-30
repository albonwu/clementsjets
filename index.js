var express = require('express');
var app = express();
var routes = require('./routes/routes');
routes(app);

app.set('port', (process.env.PORT || 3000));
// view engine setup
app.set('views', 'app/templates');
app.set('view engine', 'jade');

app.use('/dist', express.static(__dirname + '/dist'));
/// catch 404 and forward to error handler

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});