const liveServer = require('live-server');

const options = {
	port: 4000,
	root: './',
	open: false,
	wait: 3000,
	logLevel: 2,
	watch: ['./lib', './node_modules/backbone-leviathan/dist/'],
	mount: [['/', './lib/html'], ['/js', './dist'], ['/libraries', './node_modules/@nahuelio']]
};

liveServer.start(options);
