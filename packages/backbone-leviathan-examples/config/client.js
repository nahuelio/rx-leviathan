/**
 * Server Bundle Configuration
 */
const typescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');
const common = require('./common');

const plugins = [...common.plugins, typescript({ module: 'esnext' })];
const output = { ...common.output, dir: './dist/public', format: 'cjs', sourcemap: 'inline' };

module.exports = [
	{
		input: './js/libraries.ts',
		plugins: [...plugins, terser()],
		output,
		external: [
			'jquery'
		]
	}, {
		input: { 'simple': './js/pages/simple.tsx' },
		plugins,
		output,
		external: [
			'underscore',
			'backbone',
			'@nahuelio/backbone-leviathan'
		]
	}
];
