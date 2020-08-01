import { Leviathan } from '../..';

describe('Leviathan.Store', () => {
	describe('constructor()', () => {
		it('should instantiate class', () => {
			assert.instanceOf(new Leviathan.Store({ counter: 1 }), Leviathan.Store);
		});
	});
});
