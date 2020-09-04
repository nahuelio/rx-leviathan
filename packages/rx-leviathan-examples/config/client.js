/**
 * Client Bundle Configuration
 */
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');
const environment = process.env.ENV || 'dev';

/**
 * Base Output
 */
const output = {
	dir: './dist',
	entryFileNames: '[name].js',
	exports: 'named',
	format: 'system',
	sourcemap: 'inline'
};

/**
 * Base Plugins
 */
const plugins = [
	nodeResolve(),
	commonjs(),
	typescript({ module: 'esnext' })
];

const targetLibraries = {
	input: './js/libraries.ts',
	plugins: [...plugins, terser()],
	output
};

const targetApplication = {
	input: { 'simple': './js/pages/simple.tsx' },
	plugins,
	output: Object.assign({
		paths: {
			'rxjs': './libraries.js',
			'@nahuelio/rx-leviathan': './libraries.js'
		}
	}, output),
	external: ['rxjs', '@nahuelio/rx-leviathan']
}

module.exports = (environment === 'prod' ? [targetLibraries] : []).concat([targetApplication]);
