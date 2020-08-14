/**
 * Server Bundle Configuration
 */
const typescript = require('@rollup/plugin-typescript');
const common = require('./common');

module.exports = {
	input: {
		'simple': './js/pages/simple.tsx'
	},
	plugins: [...common.plugins, typescript({ module: 'System' })],
	output: {
		...common.output,
		format: 'system',
		sourcemap: true
	}
};
