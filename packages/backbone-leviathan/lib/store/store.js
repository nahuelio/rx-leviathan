/**
 * Backbone Leviathan Store
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import _ from 'underscore';

/**
 * Store Class
 * @class Store
 */
class Store {
	/**
	 * State
	 * @property state
	 */
	state;

	/**
	 * @constructor
	 * @param {Maybe<State<T>>} initial
	 */
	constructor(initial) {
		Object.assign(this, { state: initial || {} });
	}

	/**
	 * Dispatch an action with given set of parameters.
	 * @param {string} name
	 * @param {any[]} params
	 * @returns StoreInstance<T, A>
	 */
	dispatch(name, ...params) {
		if (_.has(this, name) && _.isFunction(this[name])) {
			this[name](...params);
		}
		return this;
	}
}

export { Store };
