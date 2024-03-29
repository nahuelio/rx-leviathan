/**
 * @module @nahuelio/rx-leviathan/ui
 * @desc RxLeviathan Component TODO
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */

/**
 * Class Component
 */
export class Component {
	/**
	 * @private
	 * @type {object}
	 */
	_props = {};

	/**
	 * @private
	 * @type {RxLeviathan.Maybe<RxLeviathan.Store>[]}
	 */
	_stores = [];

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
	 * Dispatch action over any of the subscribed stores
	 * @param {RxLeviathan.StoreAction<RxLeviathan.Store>} action
	 * @param {...any} params
	 * @returns {View}
	 */
	dispatch(action, ...params) {
		this._stores.forEach((store) => {
			if (store[action]) store[action](...params);
		});
		return this;
	}

	/**
	 * Default strategy that renders the view
	 * @returns {RxLeviathan.Maybe<JSX.RxLeviathanElement>}
	 */
	render() {
		return null;
	}
}
