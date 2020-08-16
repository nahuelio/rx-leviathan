/**
 * @module @nahuelio/rx-leviathan/view
 * @desc RxLeviathan View TODO
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */

/**
 * @class {RxLeviathan.View<RxLeviathan.Props, RxLeviathan.Store>}
 */
export class View {
	_props = {};
	_store = null;
	_events = {};

	/**
	 * @type {RxLeviathan.Props}
	 */
	get props() {
		return this._props;
	}

	/**
	 * @type {RxLeviathan.Store}
	 */
	get store() {
		return this._store;
	}

	/**
	 * @type {RxLeviathan.EventHash}
	 */
	get events() {
		return this._events;
	}

	/**
	 * @constructor
	 * @param {RxLeviathan.Maybe<RxLeviathan.Props>} props
	 */
	constructor(props) {
		Object.assign(this, { props: props || {} });
	}

	/**
	 * Default strategy to render a view
	 * @returns {Maybe<JSX.RxLeviathanElement>}
	 */
	render() {
		return null;
	}
}
