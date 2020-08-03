import { Core, Store } from '@nahuelio/backbone-leviathan';

type ExampleState = {
	counter: number;
}

/**
 * Example Store
 * @class {ExampleStore}
 */
@Core.register()
export class ExampleStore extends Store<ExampleState> {
	readonly state: ExampleState = {
		counter: 1
	};

	protected increase() {
		this.state.counter++;
	}

	protected decrease() {
		this.state.counter--;
	}
}
