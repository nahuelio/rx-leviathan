/**
 * Backbone Leviathan Store
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { IStore, State, Maybe } from 'leviathan';
import _ from 'underscore';

/**
 * Store Class
 * @class Store
 */
class Store<T extends State<T>> implements IStore<T> {
	/**
	 * State
	 * @property state
	 */
	readonly state: State<T> = {} as State<T>;

	/**
	 * @constructor
	 * @param {Maybe<State<T>>} initial
	 */
	constructor(initial?: Maybe<State<T>>) {
		Object.assign(this, { state: initial || {} });
	}

	/**
	 * Dispatch an action with given set of parameters.
	 * @param {string} name
	 * @param {any[]} params
	 * @returns StoreInstance<T, A>
	 */
	dispatch(name: keyof Omit<Store<T>, 'state' | 'dispatch'>, ...params: any[]): IStore<T> {
		if (_.has(this, name) && _.isFunction(this[name])) {
			(this[name] as Function)(...params);
		}
		return this;
	}
}

export default Store;
