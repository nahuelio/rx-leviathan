/**
 * Rollup Production Environment Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
const common = require('./common');
const terser = require('rollup-plugin-terser');

/**
 * Common Plugins for outputs
 */
const plugins = [
	common.plugins.nodeResolve(),
	common.plugins.commonjs(),
	common.plugins.typescript({ module: 'commonjs' }),
	terser()
];

module.exports = [
	// Commonjs
	{
		input: common.input,
		output: { ...common.output, format: 'cjs' },
		plugins
	},
	// ES module
	{
		input: common.input,
		output: { ...common.output, dir: './dist/es', format: 'esnext' },
		plugins
	}
];
