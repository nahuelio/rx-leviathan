'use strict';

const path = require('path');

/**
 * Mocha Configuration
 */
module.exports = {
	package: './package.json',
	slow: 75,
	timeout: 2000,
	ui: 'bdd',
	diff: true,
	'inline-diffs': true,
	reporter: 'spec',
	global: ['chai', 'sinon'],
	spec: 'test/**/*.test.ts',
	require: [
		'ts-node/register',
		'json5/lib/register',
		'chai/register-assert',
		'jsdom-global/register',
		path.resolve(__dirname) + '/test/globals.ts'
	],
	extension: ['ts', 'json5'],
	'watch-files': ['lib/**/*.ts', 'test/**/*.ts']
};
