/**
 * Rollup Bundling Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
const typescript = require('typescript');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const pluginTypescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');
const { use } = require('@nahuelio/rx-leviathan');
const environment = process.env.ENV || 'dev';

/**
 * Common Output
 */
const commonOutput = {
	dir: './dist',
	entryFileNames: '[name].js',
	exports: 'named',
	format: 'system'
};

/**
 * Common Plugins
 */
const commonPlugins = [
	nodeResolve(),
	commonjs(),
	pluginTypescript({ module: 'esnext', typescript: use(typescript) }),
	...(environment === 'prod' ? [terser()] : [])
];

module.exports = [
	{
		input: './js/libraries',
		output: commonOutput,
		plugins: commonPlugins
	},
	{
		input: { 'simple': './js/pages/simple.tsx' },
		output: { ...commonOutput, paths: { '@nahuelio/rx-leviathan': './libraries.js' } },
		external: ['@nahuelio/rx-leviathan'],
		plugins: commonPlugins
	}
];
