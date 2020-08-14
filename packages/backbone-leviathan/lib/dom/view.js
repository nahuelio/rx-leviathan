/**
 * @module @nahuelio/backbone-leviathan/view
 * @desc Backbone Leviathan View TODO
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */

/**
 * @class {Leviathan.View<Leviathan.Props, Leviathan.Store>}
 */
export class View {
	_props = {};
	_store = null;
	_events = {};

	/**
	 * @type {Leviathan.Props}
	 */
	get props() {
		return this._props;
	}

	/**
	 * @type {Leviathan.Store}
	 */
	get store() {
		return this._store;
	}

	/**
	 * @type {Leviathan.EventHash}
	 */
	get events() {
		return this._events;
	}

	/**
	 * @constructor
	 * @param {Leviathan.Maybe<Leviathan.Props>} props
	 */
	constructor(props) {
		Object.assign(this, { props: props || {} });
	}

	/**
	 * Default strategy to render a view
	 * @returns {Maybe<JSX.LeviathanElement>}
	 */
	render() {
		return null;
	}
}
