import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';

export default {
	input: {
		'leviathan': './lib/leviathan.ts'
	},
	plugins: [
		replace({
			'process.env.npm_package_name': JSON.stringify(process.env.npm_package_name),
			'process.env.npm_package_version': JSON.stringify(process.env.npm_package_version)
		}),
		typescript({ tsconfig: './tsconfig.json', "inlineSourceMap": false })
	],
	output: [
		{
			format: 'iife',
			dir: './dist',
			name: 'leviathan',
			entryFileNames: 'backbone-[name].js',
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
			name: 'leviathan',
			entryFileNames: 'backbone-[name].min.js',
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
