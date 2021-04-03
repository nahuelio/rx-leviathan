/**
 * Rollup Build Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
const fs = require('fs-extra');
const environment = process.env.ENV || 'dev';
const configs = require(`./config/${environment}`);

fs.removeSync('./dist');
module.exports = configs.map((config) => ({
	...config,
	input: config.input,
	output: config.output,
	...(config.external ? { external: config.external } : {}),
	...(config.plugins ? { external: config.plugins } : {})
}));
