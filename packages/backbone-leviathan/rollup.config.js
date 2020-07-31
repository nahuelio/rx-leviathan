import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';

export default {
	input: {
		'backbone-leviathan': './public/backbone-leviathan.js'
	},
	plugins: [
		replace({
			'process.env.npm_package_name': JSON.stringify(process.env.npm_package_name),
			'process.env.npm_package_version': JSON.stringify(process.env.npm_package_version)
		})
	],
	output: [
		{
			format: 'iife',
			dir: './dist',
			name: 'backbone-leviathan',
			entryFileNames: '[name].js',
			globals: {
				'backbone': 'Backbone',
				'underscore': '_'
			},
			exports: 'named',
			sourcemap: true
		},
		{
			format: 'iife',
			dir: './dist',
			name: 'backbone-leviathan',
			entryFileNames: '[name].min.js',
			globals: {
				'backbone': 'Backbone',
				'underscore': '_'
			},
			exports: 'named',
			sourcemap: true,
			plugins: [terser()]
		}
	],
	external: [
		'process',
		'underscore',
		'backbone'
	]
}
