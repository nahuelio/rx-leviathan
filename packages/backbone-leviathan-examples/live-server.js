const liveServer = require('live-server');

const options = {
	port: 4000,
	root: './',
	open: false,
	wait: 3000,
	logLevel: 0,
	watch: ['./public', './lib', './node_modules/backbone-leviathan/dist/'],
	mount: [['./public', './lib', './node_modules/backbone-leviathan/dist']]
};

liveServer.start(options);
