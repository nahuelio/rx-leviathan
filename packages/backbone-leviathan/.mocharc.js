/**
 * Mocha Options
 */
module.exports = {
	diff: true,
	extension: ['js'],
	package: './package.json',
	reporter: 'spec',
	slow: 75,
	timeout: 2000,
	ui: 'bdd',
	global: ['chai', 'sinon'],
	require: ['ts-node/register', 'jsdom-global/register'],
	spec: 'test/**/*.test.js',
	'watch-files': ['public/*.js', 'public/**/*.js', 'test/*.js', 'test/**/*.js']
};
