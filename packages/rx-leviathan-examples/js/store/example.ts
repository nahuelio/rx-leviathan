import { Observable, Store } from '@nahuelio/rx-leviathan';

export type ExampleStoreProps = {
	counter?: number;
}

/**
 * Example Store
 * @class {ExampleStore}
 */
@Observable
export class ExampleStore extends Store<ExampleStoreProps> {
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
