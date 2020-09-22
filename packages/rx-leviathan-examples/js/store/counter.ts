import { Action, Observable, Store } from '@nahuelio/rx-leviathan';

export type CounterStoreProps = {
	counter: number;
};

/**
 * Counter Store
 * @class {CounterStore}
 */
@Observable
export class CounterStore extends Store {
	state: CounterStoreProps = {
		counter: 1
	};

	@Action
	public increase(): void {
		this.state.counter++;
	}

	@Action
	public decrease(): void {
		this.state.counter--;
	}
}
