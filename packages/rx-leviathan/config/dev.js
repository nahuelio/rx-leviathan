/**
 * Rollup Development Environment Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
const common = require('./common');

/**
 * Common Plugins for outputs
 */
const plugins = [
	common.plugins.replace({
		'process.env.npm_package_name': `${JSON.stringify(process.env.npm_package_name + '-dev')}`,
		'process.env.npm_package_version': JSON.stringify(process.env.npm_package_version)
	}),
	common.plugins.nodeResolve(),
	common.plugins.commonjs(),
	common.plugins.typescript({ module: 'commonjs' })
];

/**
 * Common External for outputs
 */
const external = common.external;

module.exports = [
	// Commonjs
	{
		input: common.input,
		output: { ...common.output, entryFileNames: '[name].dev.js', format: 'cjs' },
		external,
		plugins
	},
	// ES module
	{
		input: common.input,
		output: { ...common.output, dir: './dist/system', entryFileNames: '[name].dev.js', format: 'system' },
		external,
		plugins
	}
];
