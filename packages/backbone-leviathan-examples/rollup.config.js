const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { typescript } = require('@rollup/plugin-typescript');

const output = {
	dir: './dist',
	entryFileNames: '[name].js',
	format: 'systemjs',
	exports: 'named',
	sourcemap: false
};

export default {
	input: {
		'simple': './lib/js/simple.tsx',
		'advanced': './lib/js/advanced.tsx'
	},
	plugins: [
		nodeResolve(),
		commonjs(),
		typescript()
	],
	output: [
		{ ...output, name: 'simple' },
		{ ...output, name: 'advanced' }
	]
};
