import { Observable, Store } from '@nahuelio/backbone-leviathan';

export type ExampleStoreProps = {
	counter?: number;
}

/**
 * Example Store
 * @class {ExampleStore}
 */
@Observable()
class ExampleStore extends Store<ExampleStoreProps> {
	readonly state: ExampleStoreProps = {
		counter: 1
	};

	public increase(): void {
		this.state.counter++;
	}

	public decrease(): void {
		this.state.counter--;
	}
}

export { ExampleStore };
