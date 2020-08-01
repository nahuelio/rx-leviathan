const environment = process.env.ENV || 'dev';
const { output, plugins } = require(`./config/${environment}`);

export default {
	input: { 'backbone-leviathan': './lib/backbone-leviathan.js' },
	plugins,
	output,
	external: [
		'process',
		'underscore',
		'backbone'
	]
}
