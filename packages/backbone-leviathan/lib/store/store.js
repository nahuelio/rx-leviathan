/**
 * @module @nahuelio/backbone-leviathan/store
 * @desc Backbone Leviathan Store TODO
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import _ from 'underscore';

/**
 * Class Leviathan.Store
 */
export class Store {
	/**
	 * @readonly
	 * @type {Leviathan.Maybe<Leviathan.Props<{}>>}
	 */
	state = null;

	/**
	 * @constructor
	 * @param {Leviathan.Maybe<Leviathan.Props<{}>>} initial
	 */
	constructor(initial) {
		Object.assign(this, { state: initial || null });
	}

	/**
	 * Dispatches an action with a given name and optionally passing parameters.
	 * @this {Store}
	 * @param {Leviathan.StoreAction} name
	 * @param {any[]} params
	 * @returns {Store}
	 */
	dispatch(name, ...params) {
		if (this[name] && _.isFunction(this[name])) {
			// @ts-ignore
			this[name](...params);
		}
		return this;
	}
}
