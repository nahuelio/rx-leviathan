import { Maybe, Action, Observable, Store } from '@nahuelio/rx-leviathan';

type CounterProps = {
	counter?: Maybe<number>;
};

/**
 * Counter Store
 * @class {CounterStore}
 */
@Observable
export class CounterStore extends Store<CounterProps> {
	protected state: CounterProps = {
		counter: 1
	};

	get counter(): Maybe<number> {
		return this.state.counter;
	}

	@Action
	public increase(): void {
		this.state.counter++;
	}

	@Action
	public decrease(): void {
		this.state.counter--;
	}
}
