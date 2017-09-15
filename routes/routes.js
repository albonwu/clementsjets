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

	standardLinks = [
		['', 'index'],
		'about',
		'updates',
		'resources',
		'calendar',
		'gene',
		[
			'ha-ha-ha-now-you-will-have-to-type-in-this-really-long-url-to-access-the-secret-game-of-four-dimensinoal-tic-tac-toe-ha-ha-ha',
			'quartictactoe'
		],
		'invitational',
		'login',
		'logup',
		'terms',
		'updates-old',
		'admin',
		'join',
		'invitationalsignup',
		'donate',
	];
	standardLinks.forEach(function(url) {
		if(typeof(url) == 'string') {
			app.get('/' + url, function(req, res) {
				res.render(url);
			});
		} else {
			app.get('/' + url[0], function(req, res) {
				res.render(url[1]);
			});
		}
	});
}