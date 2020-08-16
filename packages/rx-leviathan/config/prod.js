/**
 * Production Profile
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
const { plugins, output } = require('./common');
const { terser } = require('rollup-plugin-terser');

module.exports = {
	output: Object.assign(output, {
		entryFileNames: '[name].min.js',
		plugins: [terser()]
	}),
	plugins: [...plugins],
	watch: false
};
