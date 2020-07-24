import { assert } from 'chai';
import Backbone from '../../lib/leviathan';

describe('Leviathan Core', function() {
	it('should verify leviathan package information', () => {
		assert.equal(Backbone.Leviathan.__name__, process.env.npm_package_name);
		assert.equal(Backbone.Leviathan.__version__, process.env.npm_package_version);
		assert.exists(Backbone.Leviathan.get);
	});

	it('should verify leviathan store module', () => {
		assert.exists(Backbone.Leviathan.Store);
	});

	it('should verify leviathan DOM module', () => {
		assert.exists(Backbone.Leviathan.DOM);
	});
});
