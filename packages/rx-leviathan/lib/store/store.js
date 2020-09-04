/**
 * @module @nahuelio/rx-leviathan/store
 * @desc RxLeviathan Store TODO
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */

/**
 * Class Leviathan.Store
 */
export class Store {
	/**
	 * Unique reference
	 * @private
	 * @type {Maybe<Symbol>}
	 */
	uid = null;

	/**
	 * @private
	 * @type {RxLeviathan.Maybe<RxLeviathan.Props<{}>>}
	 */
	_state = null;

	/**
	 * Get State
	 * @returns {RxLeviathan.Maybe<RxLeviathan.Props<{}>>}
	 */
	get state() {
		return this._state;
	}

	/**
	 * @constructor
	 * @param {RxLeviathan.Maybe<RxLeviathan.Props<{}>>} initial
	 */
	constructor(initial) {
		Object.assign(this, { state: initial || null, uid: Symbol.for('Store') });
	}

	/**
	 * Dispatches an action with a given name and optionally passing parameters.
	 * @param {RxLeviathan.StoreAction} name
	 * @param {any[]} params
	 * @returns {Store}
	 */
	dispatch(name, ...params) {
		if (this[name] && typeof this[name] === 'function') {
			this[name](...params);
		}
		return this;
	}
}
