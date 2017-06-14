module.exports = function(app) {
	var bodyParser = require('body-parser');
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	var bcrypt = require('bcryptjs');
	var secret;
	try {
		secret = require('../secret.json');
	}
	catch (e) {
		console.log('local secret not found');
	}

	var hash = process.env.HASH || secret.hash;

	var links;
	if(process.env.DROPBOX){
		links = {
			"dropbox": process.env.DROPBOX,
			"testLinkArchives": process.env.TEST_LINK_ARCHIVES,
			"eventPrepSheet": process.env.EVENT_PREP_SHEET
		}
	}
	else {
		links = secret.links;
	}

	app.get('/', function (req, res) {
	    res.render('index');
	});

	app.get('/about', function (req, res) {
	    res.render('about');
	});

	app.post('/signin', function(req, res) {
		if(bcrypt.compareSync(req.body.password, hash)) {
			console.log("correct password"+" "+req.body.password);
			console.log(links);
			res.render('resources', {dropbox: links.dropbox, testLinkArchives: links.testLinkArchives, eventPrepSheet: links.eventPrepSheet});
		}
		else {
			console.log("wrong password");
			res.redirect('/resources');
		}
		
	});

	app.get('/resources', function (req, res) {
    	res.render('signin');
	});

	app.get('/updates', function (req, res) {
	    res.render('updates');
	});

	app.get('/calendar', function (req, res) {
	    res.render('calendar');
	});

	app.get('/gene', function (req, res) {
	    res.render('gene');
	});
}