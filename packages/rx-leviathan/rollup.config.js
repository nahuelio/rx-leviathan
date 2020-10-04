const environment = process.env.ENV || 'dev';
const { output, plugins, watch } = require(`config/${environment}`);

export default {
	input: { 'rx-leviathan': './lib/rx-leviathan.js' },
	plugins,
	output,
	external: ['process', 'rxjs'],
	watch
}
