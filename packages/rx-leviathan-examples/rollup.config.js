/**
 * Rollup Bundling Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
const configs = require(`./config/client.js`);

module.exports = configs.map((config) => ({
	input: config.input,
	output: config.output,
	...(config.external ? { external: config.external } : {}),
	...(config.plugins ? { plugins: config.plugins } : {})
}));
