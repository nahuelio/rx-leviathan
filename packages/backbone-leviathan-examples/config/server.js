/**
 * Server Bundle Configuration
 */
const typescript = require('@rollup/plugin-typescript');
const common = require('./common');

module.exports = {
	input: {
		'server': './server/server.ts'
	},
	plugins: [...common.plugins, typescript({ module: 'commonjs' })],
	output: {
		...common.output,
		format: 'cjs'
	},
	external: [
		'fs',
		'path',
		'express',
		'compression'
	]
};

