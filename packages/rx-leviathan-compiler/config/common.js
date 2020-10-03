/**
 * Rollup Common Environment Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');

module.exports = {
	input: {
		'rxlc': './lib/rxlc.ts'
	},
	output: {
		dir: './dist',
		entryFileNames: '[name].js',
		exports: 'named'
	},
	plugins: {
		nodeResolve,
		commonjs,
		typescript
	}
};
