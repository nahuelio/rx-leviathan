/**
 * Backbone Leviathan Store
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import _ from 'underscore';

/**
 * @template T
 * @typedef {leviathan.Maybe<T>} Maybe
 */
/**
 * @typedef {leviathan.State<{}>} State
 * @typedef {leviathan.Store<State>} Store
 * @typedef {leviathan.StoreAction} StoreAction
 */

/**
 * @class {Store}
 */
export const Store = class {

	/**
	 * @type {Maybe<State>}
	 */
	state = null;

	/**
	 * @constructor
	 * @param {Maybe<State>} initial
	 */
	constructor(initial) {
		Object.assign(this, { state: initial || null });
	}

	/**
	 * Dispatches an action with a given name and optionally passing parameters.
	 * @this {Store}
	 * @param {StoreAction} name
	 * @param {any[]} params
	 * @returns {Store}
	 */
	dispatch(name, ...params) {
		if (_.has(this, name) && _.isFunction(this[name])) {
			// @ts-ignore
			this[name](...params);
		}
		return this;
	}
}
