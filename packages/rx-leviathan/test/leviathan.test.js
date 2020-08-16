import { Leviathan } from '../lib/rx-leviathan';

describe('Leviathan.Core', () => {
	it('should verify leviathan package information', () => {
		assert.equal(Leviathan.NAME, process.env.npm_package_name);
		assert.equal(Leviathan.VERSION, process.env.npm_package_version);
		assert.exists(Leviathan.get);
	});

	it('should verify leviathan store module', () => {
		assert.exists(Leviathan.Store);
	});

	it('should verify leviathan DOM module', () => {
		assert.exists(Leviathan.DOM);
	});
});
