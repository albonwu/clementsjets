const express = require('express')
const app = express()
const favicon = require('serve-favicon')

const env = process.env.NODE_ENV || 'development'
if (env === 'development') {
	const logger = require('morgan')
	require('dotenv').config()
	app.use(logger('dev'))
}

// Routes
const routes = require('./routes/routes')
routes(app)

app.set('port', process.env.PORT || 3000)

// view engine setup
app.set('views', 'app/templates')
app.set('view engine', 'pug')

app.use('/dist', express.static(__dirname + '/dist'))

app.use(favicon(__dirname + '/favicon.ico'))

app.use(function(req, res, next) {
	res.status(400)
	res.send(
		'<a href=".."><img style="max-width:100vw;max-height:100vh" src="./dist/imgs/404/' +
			Math.ceil(9 * Math.random()) +
			'.jpg" style="width:90vw"></a>'
	)
})

app.listen(app.get('port'), () => {
	console.log('Node app is running on port', app.get('port'))
})
