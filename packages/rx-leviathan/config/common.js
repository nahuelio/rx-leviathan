/**
 * Rollup Common Environment Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
const replace = require('rollup-plugin-replace');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');

module.exports = {
	input: {
		'rxlc': './lib/rxlc.ts',
		'rx-leviathan': './lib/rx-leviathan.ts'
	},
	output: {
		dir: './dist',
		entryFileNames: '[name].js',
		exports: 'named'
	},
	external: ['process', 'rxjs'],
	plugins: {
		replace,
		nodeResolve,
		commonjs,
		typescript
	}
};
