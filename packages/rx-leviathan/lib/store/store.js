/**
 * @module @nahuelio/rx-leviathan/store
 * @desc RxLeviathan Store TODO
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import _ from 'underscore';

/**
 * Class Leviathan.Store
 */
export class Store {
	/**
	 * @readonly
	 * @type {RxLeviathan.Maybe<RxLeviathan.Props<{}>>}
	 */
	state = null;

	/**
	 * @constructor
	 * @param {RxLeviathan.Maybe<RxLeviathan.Props<{}>>} initial
	 */
	constructor(initial) {
		Object.assign(this, { state: initial || null });
	}

	/**
	 * Dispatches an action with a given name and optionally passing parameters.
	 * @param {RxLeviathan.StoreAction} name
	 * @param {any[]} params
	 * @returns {Store}
	 */
	dispatch(name, ...params) {
		if (this[name] && _.isFunction(this[name])) {
			this[name](...params);
		}
		return this;
	}
}
