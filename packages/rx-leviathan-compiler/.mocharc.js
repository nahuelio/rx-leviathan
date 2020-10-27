'use strict';

require('ts-node/register');

/**
 * Mocha Configuration
 */
module.exports = {
	require: [
		'json5/lib/register',
		'chai/register-expect',
		'./test/globals.ts'
	],
	ui: 'bdd',
	diff: true,
	extension: ['ts', 'json5'],
	'inline-diffs': true,
	timeout: 2000,
	reporter: 'spec'
};
