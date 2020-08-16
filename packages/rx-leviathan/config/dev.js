/**
 * Development Profile
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
const { plugins, output } = require('./common');

module.exports = {
	output: Object.assign(output, {
		entryFileNames: '[name].js'
	}),
	plugins: [...plugins],
	watch: true
};
