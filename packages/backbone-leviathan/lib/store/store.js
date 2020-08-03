/**
 * Backbone Leviathan Store
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import _ from 'underscore';

/**
 * @class {Leviathan.Store}
 */
export class Store {
	/**
	 * @readonly
	 * @type {Maybe<Leviathan.State<{}>>}
	 */
	state = null;

	/**
	 * @constructor
	 * @param {Maybe<Leviathan.State<{}>>} initial
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
