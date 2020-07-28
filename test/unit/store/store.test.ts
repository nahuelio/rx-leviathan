import { Leviathan } from '../../../lib/leviathan';

describe('Class Store', () => {
	let store;
	describe('constructor()', () => {
		type State = {
			counter: number;
		};
		store = new Leviathan.Store<State>({ counter: 1 });
	});
});
