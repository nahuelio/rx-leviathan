/**
 * Rollup Bundling Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
const target = process.env.BUNDLE_TARGET || 'client';
const configs = require(`./config/${target}.js`);

module.exports = configs.map((config) => ({
	input: config.input,
	output: config.output,
	...(config.external ? { external: config.external } : {}),
	...(config.plugins ? { plugins: config.plugins } : {})
}));
