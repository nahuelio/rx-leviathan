/**
 * @module @nahuelio/rx-leviathan/view
 * @desc RxLeviathan View TODO
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */

/**
 * @class {RxLeviathan.View<RxLeviathan.Props, RxLeviathan.Store>}
 */
export class View {
	/**
	 * @private
	 * @type {object}
	 */
	_props = {};

	/**
	 * @private
	 * @type {RxLeviathan.Maybe<RxLeviathan.Store>}
	 */
	_store = null;

	/**
	 * @private
	 * @type {RxLeviathan.SubscriptionHash}
	 */
	_subscriptions = {};

	/**
	 * Unique reference
	 * @private
	 * @type {RxLeviathan.Maybe<Symbol>}
	 */
	uid = null;

	/**
	 * Get Props
	 * @returns {RxLeviathan.Props}
	 */
	get props() {
		return this._props;
	}

	/**
	 * Get Store
	 * @returns {RxLeviathan.Store}
	 */
	get store() {
		return this._store;
	}

	/**
	 * Set Subscriptions
	 * @param {RxLeviathan.SubscriptionHash} value
	 */
	set subscriptions(value) {
		this._subscriptions = value;
	}

	/**
	 * Get Subscriptions
	 * @type {RxLeviathan.SubscriptionHash}
	 */
	get subscriptions() {
		return this._subscriptions;
	}

	/**
	 * @constructor
	 * @param {RxLeviathan.Maybe<RxLeviathan.Props>} [props]
	 */
	constructor(props) {
		Object.assign(this, { _props: props || {}, uid: Symbol.for('View') });
	}

	/**
	 * Default strategy that renders the view
	 * @returns {RxLeviathan.Maybe<JSX.RxLeviathanElement>}
	 */
	render() {
		return null;
	}
}
