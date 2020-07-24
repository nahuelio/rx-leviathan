import { Leviathan } from '../../../lib/leviathan';

describe('Class Store', () => {
	let store;
	describe('constructor()', () => {
		type State = {
			counter: number;
		};
		type Actions = {
			increment: () => void;
		};
		store = new Leviathan.Store<State, Actions>(
			{ counter: 1 }, {
				increment: function() {
					// TODO: Resolve this scope!
				}
			});
	});

});
