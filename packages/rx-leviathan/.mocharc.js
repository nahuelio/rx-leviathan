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
	require: ['@babel/register', 'jsdom-global/register', './test/setup.js'],
	spec: 'test/**/*.test.js',
	'watch-files': ['lib/**/*.js', 'test/**/*.js']
};
