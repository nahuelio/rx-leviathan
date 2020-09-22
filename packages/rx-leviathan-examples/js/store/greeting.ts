import { Observable, Store } from '@nahuelio/rx-leviathan';

export type GreetingStoreProps = {
	greeting: string;
};

/**
 * Greeting Store
 * @class {GreetingStore}
 */
@Observable
export class GreetingStore extends Store {
	readonly state: GreetingStoreProps = {
		greeting: 'Hello'
	};

	public greet(name: string) {
		console.log(`${this.state.greeting} ${name}`);
	}
}
