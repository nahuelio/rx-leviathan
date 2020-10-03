/**
 * Rollup Build Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
const environment = process.env.ENV || 'dev';
const configs = require(`config/${environment}`);

module.exports = configs.map((config) => ({
	...config,
	input: config.input,
	output: config.output,
	...(config.external ? { external: config.external } : {}),
	...(config.plugins ? { external: config.plugins } : {})
}));
