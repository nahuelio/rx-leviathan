/**
 * Rollup Bundling Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
const target = process.env.BUNDLE_TARGET || 'client';
const config = require(`./config/${target}.js`);

module.exports = {
	input: { ...config.input },
	plugins: config.plugins,
	output: [config.output],
	external: [...config.external]
};
