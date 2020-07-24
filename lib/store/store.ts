/**
 * Backbone Leviathan Store
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { IStore, State, Actions, Maybe } from 'leviathan';

/**
 * Store Class
 * @class Store
 */
class Store<T extends State<T>, A extends Actions<A>> implements IStore<T, A> {
	/**
	 * State
	 * @property state
	 */
	readonly state: State<T> = {} as T;

	/**
	 * Actions
	 * @property actions
	 */
	readonly actions: Actions<A> = {} as A;

	/**
	 * @constructor
	 * @param {Maybe<T>} state
	 * @param {Maybe<A>} actions
	 */
	constructor(state?: Maybe<T>, actions?: Maybe<A>) {
		Object.assign(this, { state: state || {}, actions: actions || {} });
	}

	/**
	 * Dispatch an action with given parameters
	 * @param {Extract<keyof A, 'string'>}name
	 * @param {any[]} params
	 * @returns StoreInstance<T, A>
	 */
	dispatch(name: Extract<keyof A, string>, ...params: any[]): IStore<T, A> {
		this.actions[name](...params);
		return this;
	}
}

export default Store;
