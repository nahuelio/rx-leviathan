/**
 * Common Bundle Configuration
 */
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

module.exports = {
	output: {
		dir: './dist',
		entryFileNames: '[name].js',
		exports: 'named',
		sourcemap: 'inline'
	},
	plugins: [
		nodeResolve(),
		commonjs()
	]
};
