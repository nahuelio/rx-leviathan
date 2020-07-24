/**
 * Mocha Options
 */
module.exports = {
	diff: true,
	extension: ['ts'],
	package: './package.json',
	reporter: 'spec',
	slow: 75,
	timeout: 2000,
	ui: 'bdd',
	global: ['chai', 'sinon'],
	require: ['ts-node/register', 'jsdom-global/register'],
	spec: 'test/unit/**/*.test.ts',
	'watch-files': ['lib/*.ts', 'lib/**/*.ts', 'test/unit/**/*.ts']
};
