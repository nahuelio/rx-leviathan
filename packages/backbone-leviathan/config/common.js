/**
 * Common Profile Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
const replace = require('rollup-plugin-replace');
const { babel } = require('@rollup/plugin-babel');

/**
 * Common Output Configuration
 */
const output = {
	dir: './dist',
	name: 'backbone-leviathan',
	globals: {
		'backbone': 'Backbone',
		'underscore': '_'
	},
	exports: 'named',
	sourcemap: true
};

/**
 * Common Plugins Configuration
 */
const plugins = [
	replace({
		'process.env.npm_package_name': JSON.stringify(process.env.npm_package_name),
		'process.env.npm_package_version': JSON.stringify(process.env.npm_package_version)
	}),
	babel({ babelHelpers: 'runtime' })
];

module.exports = { output, plugins };
