/**
 * Rollup Development Environment Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
const common = require('./common');

/**
 * Common Plugins for outputs
 */
const plugins = [
	common.plugins.nodeResolve(),
	common.plugins.commonjs(),
	common.plugins.typescript({ module: 'commonjs' })
];

module.exports = [
	// Commonjs
	{
		input: common.input,
		output: { ...common.output, entryFileNames: '[name].dev.js', format: 'cjs' },
		plugins
	},
	// ES module
	{
		input: common.input,
		output: { ...common.output, dir: './dist/es', entryFileNames: '[name].dev.js', format: 'esnext' },
		plugins
	}
];
